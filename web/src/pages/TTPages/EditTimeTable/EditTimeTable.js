import { useParams } from 'react-router-dom';
import TtApi from '../../../api/tt.api.js';
import "./EditTimeTable.scss";

/*TAKING THE BELOW IMPORT FROM TIMETABLEV2* */
import html2canvas from 'html2canvas';
import React, { useEffect, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { Alert } from 'reactstrap';
import { COLORS } from '../../../const/color.const';
import AddBatch from '../AddBatch/AddBatch';
import { teachers_list, time } from '../List/List';
// import "./TimeTableV2.scss";
import { Button, Form, FormGroup, Input } from "reactstrap";
import UploadApi from '../../../api/upload.api';
import AddTeacher from '../TeacherForm/TeacherForm';

const EditTimeTable = () => {
    const { fromDateEdit } = useParams();

    /**************************************** const Section ************************************/
    /**************************************** Use Effect Section ************************************/
    useEffect(() => {
        appenColorTOTeacherList();
        getEditTimeTable();
        const tableElement = document.querySelector('.table-style');
        if (tableElement) {
            const tableWidth = tableElement.offsetWidth;
            setTableWidth(tableWidth);
        }
    }, []);

    /**************************************** State Section *****************************************/
    const [tt, setTt] = useState(null);

    /* taking the below useStates from timetable.v2*/
    const [tableWidth, setTableWidth] = useState(0); // set table width
    const [draggedTeacher, setDraggedTeacher] = useState({}); // Contains dragged teacher
    const [lectureList, setLectureList] = useState([]);
    const [teacherAssignment, setTeacherAssignment] = useState({});
    const [teacherCounter, setTeacherCounter] = useState({}); // key: teacherId, value: counter
    const [lectureTeacherCounter, setLectureTeacherCounter] = useState({}); // key: lectureId_teacherId, value: counter to check duplicate rows
    const [duplicateTeacherDetectedInRow, setDuplicateTeacherDetectedInRow] = useState(false);
    const [draggedCellKey, setDraggedCellKey] = useState(null);

    // contains key of teacher asignment which is grag within the table
    const [addBatch, setAddBatch] = useState(null);
    const [image, setImage] = useState(null);   //  for div to image 
    const [showAddBatchModal, setShowAddBatchModal] = useState(false); //for add Batch popup
    const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState("");
    const divRef = useRef(null);

    const [batchList, setBatchList] = useState([]);
    const [teacherList, setTeacherList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    /**************************************** Component Method Section *********************************/
    const appenColorTOTeacherList = () => {
        const stateTeacherList = [];
        teachers_list.forEach((teacher, i) => {
            teacher.color = COLORS[i];
            stateTeacherList.push(teacher);
        });
        setTeacherList([...stateTeacherList]);
    };

    const getEditTimeTable = async () => {
        const result = await new TtApi().getEditTt(fromDateEdit);
        setTt(result.Object);
        setFromDate(result.Object.FromDate)
        console.log(result.Object.FromDate);
        setToDate(result.Object.ToDate);
        console.log(result.Object.FromDate);
        console.log(fromDate);
        console.log(fromDate);
        setBatchAndTimeList(result.Object);
        setLectureList([...result.Object.LectureList])
        console.log("xxxlecture",lectureList);
        const stateTeacherAssignment = teacherAssignment;
        if (result.Object.LectureList?.length > 0) {
            result.Object.LectureList?.forEach(lec => {
                if (lec?.Batch?.BatchID && lec?.Lecture?.LectureName && lec?.FacultyID) {
                    const lecture = time.find(t => t.Lecture === lec?.Lecture?.LectureName);
                    const teacher = teachers_list.find(t => t.FacultyID === lec.FacultyID);
                    if (lecture?.LectureID && teacher?.FacultyID && result?.Object?.BatchID?.indexOf(lec?.Batch?.BatchID) >= 0 && result?.Object?.LectureID?.indexOf(lecture?.LectureID) >= 0) {
                        const key = lecture.LectureID + '_' + lec?.Batch?.BatchID;
                        if (!teacherAssignment[key]) {
                            stateTeacherAssignment[key] = teacher;
                            setTeacherAssignment({ ...stateTeacherAssignment });
                            updateLectureListOnDrop(lecture, lec?.Batch, teacher);
                            updateTeacherCounterOnDrop(teacher);
                        }
                    }
                }
            });
        }
        console.log("xxx tt", tt);
        setLoaded(true);

    }

    const setBatchAndTimeList = (tt) => {
        if (tt) {
            const stateBatchList = tt?.Batch?.filter(it => tt.BatchID?.indexOf(it.BatchID) >= 0);
            setBatchList([...stateBatchList]);
        }

    };

    /* Taking the below code from timetable.v2*/
    const dragStart = (e, teacherDragged) => {
        setDraggedTeacher(teacherDragged);
    };
    const allowDrop = (ev) => {
        let t = ev.target;
        while (t && (!t.classList || !t.classList.contains("each-block"))) {
            t = t.parentNode;
        }
        if (t && t.innerText.trim() !== "") {
            // Prevent drop event if cell is not empty
            return false;
        }
        ev.preventDefault();
    };

    // Prepare lecture list
    const updateLectureListOnDrop = (lecture, batch, teacher) => {
        const stateLectureList = lectureList;
        const lectureDto = {};
        lectureDto.ID = "0";
        lectureDto.TimeTableID = "0";
        lectureDto.LectureName = "";
        lectureDto.Batch = batch;
        lectureDto.Lecture = lecture;
        lectureDto.Subject = teacher.subject;
        lectureDto.FacultyID = teacher.FacultyID;
        lectureDto.IsActive = true;
        lectureDto.CreatedByUserID = "1";
        lectureDto.CreatedOnDate = "02/05/2023";
        stateLectureList.push(lectureDto);
        setLectureList([...stateLectureList]);
    };
    const updateTeacherCounterOnDrop = (teacher) => {
        const stateTeacherCounter = teacherCounter;
        if (!stateTeacherCounter[teacher.FacultyID]) {
            stateTeacherCounter[teacher.FacultyID] = 1;
        } else {
            stateTeacherCounter[teacher.FacultyID] += 1;
        }
        setTeacherCounter({ ...stateTeacherCounter });
    }

    const checkDuplicateTeacherInRowOnDrop = (lectureId, teacherId) => {
        const key = lectureId + '_' + teacherId;
        const stateLectureTeacherCounter = lectureTeacherCounter;
        if (!stateLectureTeacherCounter[key]) {
            stateLectureTeacherCounter[key] = 1
        } else {
            stateLectureTeacherCounter[key] += 1
        }
        setLectureTeacherCounter({ ...stateLectureTeacherCounter });
        if (stateLectureTeacherCounter[key] > 1) {
            setDuplicateTeacherDetectedInRow(true);
            setTimeout(() => {
                setDuplicateTeacherDetectedInRow(false);
            }, 3000); // Alert duration 
        }
    }

    /**
     * On Drop
     * Check if drops within the table if yes remove techer from current block by preserving the teacher and proceed for select teacher & if no proceed for select teacher
     * set teacher assignment object
     * set teature lecture list for api call (updateLectureListOnDrop)
     * update teacher drop counter (updateTeacherCounterOnDrop)
     * Check if teacher dropped in same row if yes show alert and set lecture vs teacher counter to use for blink (checkDuplicateTeacherInRowOnDrop)
     * empty teacher state
     * empty state used withing table drag
     */
    const handleDrop = (e, lecture, batch) => {
        let selectedTeacher = draggedTeacher;
        if (draggedCellKey) {
            // if dragged within the table remove source & proceed for drop
            const keyInside = draggedCellKey.lecture.LectureID + '_' + draggedCellKey.batch.BatchID;
            selectedTeacher = teacherAssignment[keyInside];
            removeTeacher(draggedCellKey.lecture.LectureID, draggedCellKey.batch.BatchID, teacherAssignment[keyInside].FacultyID);
        }
        const stateTeacherAssignment = teacherAssignment;
        const key = lecture.LectureID + '_' + batch.BatchID;
        teacherAssignment[key] = selectedTeacher;
        setTeacherAssignment({ ...stateTeacherAssignment });
        updateLectureListOnDrop(lecture, batch, selectedTeacher);
        updateTeacherCounterOnDrop(selectedTeacher);
        checkDuplicateTeacherInRowOnDrop(lecture.LectureID, selectedTeacher.FacultyID);
        setDraggedTeacher({});
        setDraggedCellKey(null);
    }

    const removeTeacher = (lectureId, batchId, teacherId) => {
        // Remove from teacher assignment
        const key = lectureId + '_' + batchId
        const stateTeacherAssignment = teacherAssignment;
        delete stateTeacherAssignment[key];
        setTeacherAssignment({ ...stateTeacherAssignment });

        // Remove from lecture list
        const stateLectureList = lectureList;
        const index = stateLectureList?.findIndex(row => row.Batch?.BatchID === batchId && row.Lecture?.LectureID === lectureId);
        console.log("gggindex",index);
        console.log("xxlectureid",lectureId);
        console.log("xxbatchid",batchId);
        console.log("xxlecturliststate",stateLectureList);




        if (index >= 0) {
            stateLectureList.splice(index, 1);
            setLectureList([...stateLectureList]);


        }
        // stateLectureList.pop(teacherAssignment)

        // Decrease one from teacher counter
        const stateTeacherCounter = teacherCounter;
        stateTeacherCounter[teacherId] -= 1;
        if (stateTeacherCounter[teacherId] <= 0) {
            delete stateTeacherCounter[teacherId];
        }
        setTeacherCounter(stateTeacherCounter);
        console.log("xxxmy lre",lectureList)
    }

    // Called to provide class name if true set classname blink else empty
    // return true if same teacher counter greater than one with respect to lectureId
    const isTeacherDuplicateInLecture = (lectureId, teacherId) => {
        if (!lectureId || !teacherId) {
            return false;
        }
        const key = lectureId + '_' + teacherId;
        console.log(key);
        return lectureTeacherCounter[key] > 1;
    };

    const handleTableCellDragStart = (e, lecture, batch) => {
        setDraggedCellKey({
            lecture, batch
        });
    };

    const onDragEnd = (e) => {
        setDraggedTeacher({});
    }

    const onTouchMove = (e) => {
        console.log(e);
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        var elem = document.elementFromPoint(x, y);
        alert('xx xx elem ', elem.id);
    }

    const formatDate=(date)=>{
        if (!date){
            return "";
        }
        console.log("xxxdaete",date);
        const dateParts = date.split("/");

// month is 0-based, that's why we need dataParts[1] - 1
const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        return dateObject.toISOString().substring(0,10);

    }
    /*********************************************This below methods are added by jitendra from TimeTable.js***********************************/
    const generateUID = () => {
        // I generate the UID from two parts here 
        // to ensure the random number provide enough bits.
        var firstPart = (Math.random() * 46656) | 0;
        var secondPart = (Math.random() * 46656) | 0;
        firstPart = ("000" + firstPart.toString(36)).slice(-3);
        secondPart = ("000" + secondPart.toString(36)).slice(-3);
        return firstPart + secondPart;
    }
    const convertToImage = async () => {
        // alert("Time table image sent successfully")
        const canvas = await html2canvas(divRef.current);
        const imgData = canvas.toDataURL();
        setImage(imgData);
        /*converting page64 url got as imgData into file Object by using blob below*/
        const byteString = atob(imgData.split(',')[1]);
        const mimeString = imgData.split(',')[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ia], { type: mimeString });
        const imageName = generateUID();
        const file = new File([blob], imageName + ".jpg");
        const fileName = imageName + ".jpg";
        const result = await new UploadApi().uplaodFile(file);
        if (result === "Success") {
            const data = await new UploadApi().getUploadedFile();
            if (data.Object?.length > 0) {
                const fileDetail = data.Object.reverse().find(obj => { return obj.Title?.indexOf(imageName) >= 0 });
                // for (let i = 0; i < numberList.length; i++) {       THIS IS USED WHEN GETWATTSAPPAPI WILL USED SO DONT DELETE THIS LINES
                try {
                    // const cell = numberList[i];
                    /*CHECK THE DETAILS OF THIS GETWATTSAPPAPI IN UPLOAD.API.JS FILE IN API FOLDER*/
                    // await new UploadApi().getWattsappApi(fileDetail.LongURL, "time table", cell, fileName);
                    await new UploadApi().getWattsappGroupApiOthers(fileDetail.LongURL, "time table", fileName);
                    // await new UploadApi().getWattsappGroupApiTeachers(fileDetail.LongURL, "time table", fileName);
                } catch (e) {
                    // continue;
                    console.log("error")
                }
                try {
                    await new UploadApi().getWattsappGroupApiTeachers(fileDetail.LongURL, "time table", fileName);
                } catch (e) {
                    console.log("error")
                }
            }
        }
        alert("Time table image sent successfully")
    }
    const onChangeFromDate = (e) => {
        setFromDate(e.target.value);
    }
    const onChangeToDate = (e) => {
        setToDate(e.target.value);
    }
    const onAddBatch = () => {
        setShowAddBatchModal(true);
    }
    const onDeleteBatch = (batchID) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this batch?');
        if (confirmDelete) {
            const updatedBatches = batchList.filter((each) => each.BatchID !== batchID);
            setBatchList(updatedBatches);
        }
    };
    const onAddTeacher = () => {
        setShowAddTeacherModal(true);
    }
    const onDeleteTeacher = (facultyID) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Faculty?');
        if (confirmDelete) {
            const updatedTeachers = teacherList.filter((each) => each.FacultyID !== facultyID);
            setTeacherList(updatedTeachers);
        };
    }

    const saveTable = async () => {
        const sentBatchID = batchList.map(item => item.BatchID)
        console.log("xxsent", sentBatchID,)
        const result = await new TtApi().saveEditedTt(tt.TimeTableID, tt.DateType, fromDate, toDate, tt.ShiftID, tt.SessionID, tt.Session, sentBatchID, tt.LectureID, tt.CreatedByUserID, lectureList);
        console.log("mmmm", result);
        console.log("lllmmmnn",lectureList);
        alert("time table saved successfully");
    };

    const clearAll=(key)=>{
        // const key = lectureId + '_' + batchId
        const stateTeacherAssignment = teacherAssignment;
        delete stateTeacherAssignment[key];
        setTeacherAssignment({ stateTeacherAssignment });
      }

    /**************************************** Template Section *****************************************/
    return (
        <>
            {
                loaded ? <div>
                    <div className="bg-container">
                        {
                            duplicateTeacherDetectedInRow ? <Alert color="warning">
                                Two same teachers found in the same row
                            </Alert> : <></>
                        }
                        <h1 className='heading-style'>CLASS SCHEDULE</h1>
                        <div className="button-group added-style">
                            <Button className="btn " color="info" onClick={onAddBatch}>
                                Add Batches
                            </Button>
                            {showAddBatchModal && <AddBatch showModal={showAddBatchModal} setShowModal={setShowAddBatchModal} batchList={batchList} />}
                            {addBatch}
                            <Button className="btn" color="info" onClick={onAddTeacher}>
                                Add Teachers
                            </Button>
                            {showAddTeacherModal && <AddTeacher showModal={showAddTeacherModal} setShowModal={setShowAddTeacherModal} />}
                            <Button className="btn" color="info" onClick={saveTable}>
                                Save
                            </Button>
                            <Button className="btn" color="info" onClick={convertToImage}>
                                Post
                            </Button>
                            <Button className="btn" color="info" onClick={clearAll}>
                                Clear ALL
                            </Button>
                        </div>
                        <div>
                            <div ref={divRef}>
                                <br />
                                <Form >
                                    <div className='time-table-date-style'>
                                        <FormGroup className="label-date-allignment">
                                            <p>From:</p>
                                            <Input
                                                id="fromDate"
                                                name="fromDate"
                                                type="date"
                                                
                                                defaultValue={formatDate(fromDate)}
                                                onChange={(e) => { onChangeFromDate(e) }}
                                                className='input-size'
                                            />
                                        </FormGroup>
                                        <FormGroup className="label-date-allignment">
                                            <p>To:</p>
                                            <Input
                                                id="toDate"
                                                name="toDate"
                                                type="date"
                                                defaultValue={formatDate(toDate)}

                                                onChange={(e) => { onChangeToDate(e) }}
                                                className='input-size'
                                            />
                                        </FormGroup>
                                    </div>
                                </Form>

                                <table className='table-style'>
                                    <tbody>
                                        <div className="for-time">
                                            <tr>
                                                <td className='F-style time-style'>Time</td>
                                                {batchList && batchList.map((batch) => {
                                                    return (
                                                        <td className='F-style batch-style' key={batch.BatchID}>{batch.Batch}
                                                            <button className="delete-style" onClick={() => onDeleteBatch(batch.BatchID)}><RxCross2 /></button>
                                                        </td>
                                                    )
                                                })}

                                            </tr>
                                        </div>
                                        <tr >
                                            {time.map((t) => {
                                                return (
                                                    <div >
                                                        <td className='F-style time-style'>{t.Time_From}-{t.Time_To}</td>
                                                        {batchList && batchList.map((b) => {
                                                            const key = t.LectureID + '_' + b.BatchID
                                                            return (
                                                                <td
                                                                    draggable={true}
                                                                    onDragOver={allowDrop}
                                                                    onDrop={(e) => handleDrop(e, t, b)}
                                                                    onDragStart={(e) => handleTableCellDragStart(e, t, b)}
                                                                    key={key}
                                                                    id={key}
                                                                    className={`each-block ${isTeacherDuplicateInLecture(t.LectureID, teacherAssignment[key]?.FacultyID ?? null) ? "blink" : ""}`}
                                                                    style={{ backgroundColor: teacherAssignment[key]?.color }}
                                                                >
                                                                    <div className={`teacname-cross-style ${teacherAssignment[key]?.className} `}>
                                                                        <div className="teacher-name" >
                                                                            {teacherAssignment[key]?.Faculty}
                                                                        </div>
                                                                        <div className="cross-btn-container">
                                                                            {teacherAssignment[key]?.Faculty ? (
                                                                                <button
                                                                                    className="cross-style"
                                                                                    onClick={() => removeTeacher(t.LectureID, b.BatchID, teacherAssignment[key].FacultyID)}
                                                                                >
                                                                                    <RxCross2 />
                                                                                </button>
                                                                            ) : <></>}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='teacher-container'>
                            {teacherList.map((teacher, index) => {
                                const { FacultyID, Faculty } = teacher;
                                return (
                                    <div
                                        style={{ backgroundColor: teacher.color }}
                                        key={FacultyID}
                                        className="teacher-item"
                                        draggable={true}
                                        onDragStart={(e) => dragStart(e, teacher)}
                                        onDragEnd={(e) => onDragEnd(e)}
                                        onTouchStart={(e) => dragStart(e, teacher)}
                                        onTouchMove={(e) => onTouchMove(e)}
                                    >
                                        <h3>{Faculty}</h3>
                                        {teacherCounter[FacultyID] > 0 && (
                                            <span className={`counter-item `} draggable={false}>
                                                {teacherCounter[FacultyID]}
                                            </span>
                                        )}
                                        <button className="delete-style" onClick={() => onDeleteTeacher(teacher.FacultyID)}><RxCross2 /></button>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div> : <div></div>
            }
            {/* {editTimeTable} */}
        </>
    )
}
export default EditTimeTable
