import html2canvas from 'html2canvas';
import React, { useEffect, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { Alert } from 'reactstrap';
import AddBatch from '../AddBatch/AddBatch';
import { batch, teachers_list, time } from '../List/List';
import "./TimeTableV2.scss";

const TimeTableV2 = () => {

  /**************************************** const Section ************************************/
  const color = ["blue", "green", "yellow", "white", "red", "pink"]

  /**************************************** Use Effect Section ************************************/
  useEffect(() => {
    const tableElement = document.querySelector('.table-style');
    if (tableElement) {
      const tableWidth = tableElement.offsetWidth;
      setTableWidth(tableWidth);
    }
    // if (duplicateDetected) {
    //   setDuplicateDetected(false);
    //   setTimeout(() => {
    //     setDuplicateElements({});
    //   }, 3000); // Blink duration
    // }
  }, []);


  /**************************************** State Section *****************************************/
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

  const divRef = useRef(null);

  /**************************************** Component Method Section *********************************/
  /**
   * 
   * @param {*} e drag event
   * @param {*} teacherInfo teacherVo
   * Calls when drag start & drag the reacher
   */
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
  const updateLectureListOnDrop = (lecture, batch) => {
    const stateLectureList = lectureList;
    const lectureDto = {};
    lectureDto.ID = "0";
    lectureDto.TimeTableID = "0";
    lectureDto.LectureName = "";
    lectureDto.Batch = batch;
    lectureDto.Lecture = lecture;
    lectureDto.Subject = draggedTeacher.subject;
    lectureDto.FacultyID = draggedTeacher.FacultyID;
    lectureDto.IsActive = true;
    lectureDto.CreatedByUserID = "1";
    lectureDto.CreatedOnDate = "02/05/2023";
    stateLectureList.push(lectureDto);
    setLectureList([...stateLectureList]);
  };

  const updateTeacherCounterOnDrop = () => {
    const stateTeacherCounter = teacherCounter;
    if (!stateTeacherCounter[draggedTeacher.FacultyID]) {
      teacherCounter[draggedTeacher.FacultyID] = 1;
    } else {
      teacherCounter[draggedTeacher.FacultyID] += 1;
    }
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
    updateLectureListOnDrop(lecture, batch);
    updateTeacherCounterOnDrop();
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
    const index = stateLectureList?.find(row => row.batch?.BatchID === batchId && row.lecture?.LectureID === lectureId);
    if (index >= 0) {
      stateLectureList.splice(index, 1);
      setLectureList([...stateLectureList]);
    }

    // Decrease one from teacher counter
    const stateTeacherCounter = teacherCounter;
    stateTeacherCounter[teacherId] -= 1;
    if (stateTeacherCounter[teacherId] <= 0) {
      delete stateTeacherCounter[teacherId];
    }
    setTeacherCounter(stateTeacherCounter);
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

  /**************************************** Template Section *****************************************/
  // These 4 methods need to be refactored & moved to Component Method Section @jitendra methods
  const convertToImage = () => {
    html2canvas(divRef.current).then(canvas => {
      const imgData = canvas.toDataURL();
      setImage(imgData);
    }).catch(error => {
      console.error(error);
    });
  };

  const onAddBatch = () => {
    setAddBatch(<AddBatch />)
  }
  const onAddTeacher = () => {
    alert("add")
  }

  const saveTable = () => {
    // localStorage.setItem("teacherA", JSON.stringify(teacherAssignment));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "TimeTableID": 0,
      "Description": "time table save",
      "DateType": "single",
      "FromDate": "09/05/2023",
      "ToDate": "12/05/2023",
      "ShiftID": 1,
      "SessionID": 5,
      "Session": "string",
      "BatchID": [
        1, 6, 10, 7, 8, 9, 2, 3
      ],
      "LectureID": [
        1, 2, 3, 4, 5, 6, 7, 8
      ],
      "IsActive": true,
      "CreatedByUserID": 1,
      "CreatedOnDate": "09/05/2023",
      "LectureList": lectureList
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://api.aayamcareerinstitute.co.in/api/AddUpdateTimeTable", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <>
      <div className="bg-container">
        {
          duplicateTeacherDetectedInRow ? <Alert color="warning">
            Two same teachers found in the same row
          </Alert> : <></>
        }
        <h1 className='heading-style'>CLASS SCHEDULE</h1>
        <div>
          <div ref={divRef}>
            <table className='table-style'>
              <tbody>
                <div className="for-time">
                  <tr>
                    <td className='F-style time-style'>Time</td>
                    {batch.map((each) => {
                      return (
                        <td className='F-style batch-style' key={batch.BatchID}>{each.Batch}</td>
                      )
                    })}

                  </tr>
                </div>
                <tr >
                  {time.map((t) => {
                    return (

                      <div >
                        <td className='F-style time-style'>{t.Time_From}-{t.Time_To}</td>

                        {batch.map((b) => {

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
            <button onClick={onAddBatch}>+</button>
            {addBatch}
          </div>
          <button onClick={convertToImage}>Convert to Image</button>
          {image && <img src={image} alt="table" style={{ maxWidth: tableWidth }} />}
          <button onClick={saveTable}>Save</button>

        </div>


        <div className='teacher-container' style={{ maxWidth: tableWidth }}>
          {teachers_list.map((teacher, index) => {
            const { FacultyID, Faculty } = teacher;
            return (
              <div
                style={{ maxWidth: tableWidth, backgroundColor: color[FacultyID] }}
                key={FacultyID}
                className="teacher-item"
                draggable={true}
                onDragStart={(e) => dragStart(e, teacher)}
              >
                <h3>{Faculty}</h3>
                {teacherCounter[FacultyID] > 0 && (
                  <span className={`counter-item `} draggable={false}>
                    {teacherCounter[FacultyID]}
                  </span>
                )}
              </div>
            );
          })}
          <button onClick={onAddTeacher}>+</button>

        </div>

      </div>
    </>
  )
}

export default TimeTableV2;