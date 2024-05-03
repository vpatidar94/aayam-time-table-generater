import html2canvas from 'html2canvas';
import React, { useEffect, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { Alert, Badge, Button, ButtonGroup, Col, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Row, UncontrolledAlert, UncontrolledDropdown } from 'reactstrap';
import TtApi from '../../../api/tt.api.js';
import UploadApi from '../../../api/upload.api.js';
import { COLORS } from '../../../const/color.const.js';
import AddBatch from '../AddBatch/AddBatch.js';
import { batch, teachers_list, time } from '../List/List.js';
import AddTeacher from '../TeacherForm/TeacherForm.js';
import "./TimeTable.scss";

const TimeTable = () => {
  /***************************************** Use Params Section******************************/
  /**************************************** const Section ************************************/

  /**************************************** Use Effect Section ************************************/
  useEffect(() => {
    appenColorTOTeacherList();
  }, []);

  /**************************************** State Section *****************************************/
  const [draggedTeacher, setDraggedTeacher] = useState({}); // Contains dragged teacher
  const [lectureList, setLectureList] = useState([]);
  const [teacherAssignment, setTeacherAssignment] = useState({});
  const [teacherCounter, setTeacherCounter] = useState({}); // key: teacherId, value: counter
  const [lectureTeacherCounter, setLectureTeacherCounter] = useState({}); // key: lectureId_teacherId, value: counter to check duplicate rows
  const [duplicateTeacherDetectedInRow, setDuplicateTeacherDetectedInRow] = useState(false);
  const [draggedCellKey, setDraggedCellKey] = useState(null);

  // contains key of teacher asignment which is grag within the table
  const [batchList, setBatchList] = useState(batch);
  const [teacherList, setTeacherList] = useState(teachers_list);
  const [showAddBatchModal, setShowAddBatchModal] = useState(false); //for add Batch popup
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showAlert, setShowAlert] = useState("");
  const [timeOfAlert, setTimeOfAlert] = useState(false);
  // const [numberList, setNumberList] = useState([918871688429, 917898118503, 918349215747]);
  const [numberList, setNumberList] = useState([917898118503,919826362001,918349215747,917314058393,917869597239,919977116612,918085390900,918302184021,918358810742,919893640561,919713519598,919713030834,919827274005,919691938832,917043127836,917298519996,919713191848,918871841238,917007794323,919669889020,919770432150]);
  
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

  const appenColorTOTeacherList = () => {
    //due to this method once the color assigned to the teacher will stick to that teacher only i.e on deleting the teacher from teacher list the color will aslo be deleted i.e will not assign to the next teacher.
    const stateTeacherList = [];
    teachers_list.forEach((teacher, i) => {
      teacher.color = COLORS[i];
      stateTeacherList.push(teacher);
    });
    setTeacherList([...stateTeacherList]);
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

  const updateTeacherCounterOnDrop = (teacher, lectureId) => {
    const stateTeacherCounter = teacherCounter;
    if (!stateTeacherCounter[teacher.FacultyID]) {
      stateTeacherCounter[teacher.FacultyID] = 1;
      setTeacherCounter({ ...stateTeacherCounter });
      return;
    }
    // to update the counter of teacher when new teacher is droped into the cell of table
    const key = lectureId + '_' + teacher.FacultyID;
    if (lectureTeacherCounter && lectureTeacherCounter[key] && lectureTeacherCounter[key] > 1) {
      return;
    }
    stateTeacherCounter[teacher.FacultyID] += 1;
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
    checkDuplicateTeacherInRowOnDrop(lecture.LectureID, selectedTeacher.FacultyID);
    updateTeacherCounterOnDrop(selectedTeacher, lecture.LectureID);
    setDraggedTeacher({});
    setDraggedCellKey(null);
  }

  const removeTeacher = (lectureId, batchId, teacherId) => {
    // Remove from teacher assignment
    const key = lectureId + '_' + batchId;
    const stateTeacherAssignment = teacherAssignment;
    delete stateTeacherAssignment[key];
    setTeacherAssignment({ ...stateTeacherAssignment });

    // Remove from lecture list
    const stateLectureList = lectureList;
    const index = stateLectureList?.findIndex(row => row.Batch?.BatchID === batchId && row.Lecture?.LectureID === lectureId);
    console.log("xxx", index);
    if (index >= 0) {
      stateLectureList.splice(index, 1);
      setLectureList([...stateLectureList]);
    }
    // To make not blink when teacher itself dragged from one place to other in same row
    const stateLectureTeacherCounter = lectureTeacherCounter;
    const lectureTeacherKey = lectureId + '_' + teacherId;
    if (stateLectureTeacherCounter[lectureTeacherKey] > 1) {
      stateLectureTeacherCounter[lectureTeacherKey] -= 1;
    } else {
      delete stateLectureTeacherCounter[lectureTeacherKey];
    }
    setLectureTeacherCounter(stateLectureTeacherCounter);

    const keyLtId = lectureId + '_' + teacherId;
    if (lectureTeacherCounter && lectureTeacherCounter[keyLtId] && lectureTeacherCounter[keyLtId] >= 1) {
      return;
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

  const onDragEnd = (e) => {
    setDraggedTeacher({});
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
    divRef.current.style.width = "max-content";
    const canvas = await html2canvas(divRef.current);
    const imgData = canvas.toDataURL();
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
    divRef.current.style.width = "100%";
    if (result === "Success") {
      const data = await new UploadApi().getUploadedFile();
      if (data.Object?.length > 0) {
        const fileDetail = data.Object.reverse().find(obj => { return obj.Title?.indexOf(imageName) >= 0 });
        for (let i = 0; i < numberList.length; i++) {
          try {
            const cell = numberList[i];
            /*CHECK THE DETAILS OF THIS GETWATTSAPPAPI IN UPLOAD.API.JS FILE IN API FOLDER*/
            await new UploadApi().getWattsappApi(fileDetail.LongURL, "time table", cell, fileName);
            // await new UploadApi().getWattsappGroupApiOthers(fileDetail.LongURL, "time table", fileName);

            continue;
          } catch (e) {
            continue;
            // console.log("error")
          }
          // try {
          //   await new UploadApi().getWattsappGroupApiTeachers(fileDetail.LongURL, "time table", fileName);
          // } catch (e) {
          //   console.log("error")
          // }
        }
      }
    }
    if (!timeOfAlert) {
      setShowAlert(<UncontrolledAlert color="success" fade={false}>
        Time table image sent successfully
      </UncontrolledAlert>);
      setTimeout(() => {
        setTimeOfAlert(false);
        setShowAlert("");
      }, 3000);
    };

  }

  const onChangeFromDate = (e) => {
    setFromDate(e.target.value);
  }

  const onChangeToDate = (e) => {
    setToDate(e.target.value);
  }

  const onAddBatch = () => {
    // setAddBatch(<AddBatch batchList={batchList} />)
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
    const body = {
      TimeTableID: 0,
      Description: "time table save",
      DateType: !!toDate ? "multiple" : "single",
      FromDate: fromDate,
      ToDate: toDate,
      ShiftID: 1,
      SessionID: 6,
      Session: "2023-24",
      BatchID: sentBatchID,
      LectureID: [
        1, 2, 3, 4, 5, 6, 7, 8
      ],
      IsActive: true,
      CreatedByUserID: 1,
      CreatedOnDate: new Date(),
      LectureList: lectureList
    };

    const result = await new TtApi().addUpdateTt(body);
    if (result === 'Success') {
      if (!timeOfAlert) {
        setShowAlert(<UncontrolledAlert color="success" fade={false}>
          time table saved successfully
        </UncontrolledAlert>);
        setTimeout(() => {
          setTimeOfAlert(false);
          setShowAlert("");
        }, 3000);
      };

    } else {
      if (!timeOfAlert) {
        setShowAlert(<UncontrolledAlert color="danger" fade={false}>
          {result?.ExceptionMessage ?? 'An error has occurred.'}
        </UncontrolledAlert>);
        setTimeout(() => {
          setTimeOfAlert(false);
          setShowAlert("");
        }, 3000);
      };
    }
  };

  const clearAll = (key) => {
    // const key = lectureId + '_' + batchId
    const stateTeacherAssignment = teacherAssignment;
    delete stateTeacherAssignment[key];
    setTeacherAssignment({ stateTeacherAssignment });
  }


  //newly added to add double click feature 03/05/24 start

  const handleDoubleClick = (e, teacher) => {
    e.preventDefault();
    setDraggedTeacher(teacher);
  };

  const handleCellDoubleClick = (e, lecture, batch) => {
    e.preventDefault();
    if (draggedTeacher) {
      handleDrop(e, lecture, batch);
    }
  };

  //newly added to add double click feature 03/05/24 start


  /**************************************** Template Section *****************************************/
  return (
    <>
      <div className="bg-container">
        <Row>
          <Col>
            {showAlert}
            {
              duplicateTeacherDetectedInRow ? <Alert color="warning">
                Two same teachers found in the same row
              </Alert> : <></>
            }
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <h1 className='heading-style'>CLASS SCHEDULE</h1>
          </Col>
        </Row> */}

        <Row>
          <Col>
            <Form>
              <div>
                <Row>
                  <div className="col-sm-12 col-md-3 label-date-allignment">
                    <span className="date-label-style">From<span style={{ color: "red" }}>*</span>:&nbsp;&nbsp;</span>
                    <Input
                      id="fromDate"
                      name="date"
                      type="date"
                      defaultValue={fromDate}
                      onChange={(e) => { onChangeFromDate(e) }}
                      className='input-size'
                      min={new Date().toISOString().split('T')[0]}
                      placeholder='From Date'
                    />
                  </div>
                  <div className="col-sm-12 col-md-3 label-date-allignment">
                    <span className="date-label-style">To:&nbsp;&nbsp;</span>
                    <Input
                      id="toDate"
                      name="date"
                      type="date"
                      defaultValue={toDate}
                      onChange={(e) => { onChangeToDate(e) }}
                      className='input-size'
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="d-lg-none">
                    <br></br>
                    <div className="button-group">
                      <Button className="btn" color="info" onClick={saveTable} disabled={fromDate === ''}>
                        Save
                      </Button>
                      <Button className="btn" color="info" onClick={convertToImage}>
                        Post
                      </Button>
                      <ButtonGroup >
                        <UncontrolledDropdown>
                          <DropdownToggle color="info" caret>
                            More Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={onAddBatch}>
                              Add Batches
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={onAddTeacher}>
                              Add Teachers
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={clearAll}>
                              Clear ALL
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </ButtonGroup>
                    </div>
                    <br></br>
                  </div>
                  <div className="d-none d-md-block col-md-6">
                    <div className="button-group">
                      <Button className="btn " color="info" onClick={onAddBatch}>
                        Add Batches
                      </Button>
                      <Button className="btn" color="info" onClick={onAddTeacher}>
                        Add Teachers
                      </Button>
                      <Button className="btn" color="info" onClick={saveTable} disabled={fromDate === ''}>
                        Save
                      </Button>
                      <Button className="btn" color="info" onClick={convertToImage}>
                        Post
                      </Button>
                      <Button className="btn" color="info" onClick={clearAll}>
                        Clear ALL
                      </Button>
                    </div>
                  </div>
                </Row>
              </div>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
              {showAddBatchModal && <AddBatch showModal={showAddBatchModal} setShowModal={setShowAddBatchModal} batchList={batchList} />}
              {showAddTeacherModal && <AddTeacher showModal={showAddTeacherModal} setShowModal={setShowAddTeacherModal} teacherList={teacherList} />}
              <div ref={divRef} className='table-container'>
                <table className='table-style'>
                  <tbody>
                    <div className="for-time">
                      <tr>
                        <td className='F-style time-style'>Time</td>
                        {batchList.map((each) => {
                          return (
                            <td className='F-style batch-style' key={each.BatchID}>{each.Batch}
                              <button className="delete-style" onClick={() => onDeleteBatch(each.BatchID)}><RxCross2 /></button>
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
                            {batchList.map((b) => {
                              const key = t.LectureID + '_' + b.BatchID
                              return (
                                <td
                                onDoubleClick={(e) => handleCellDoubleClick(e, t, b)} // this line is newly added 03/05/24 to add double click feature
                                  draggable={!!teacherAssignment[key]?.Faculty}
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
          </Col>
        </Row>

        <Row>
          <Col>
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
                    onDoubleClick={(e) => handleDoubleClick(e, teacher)} // this line is newly added 03/05/24 to add double click feature
                  >
                    <span>{Faculty}</span>
                    {teacherCounter[FacultyID] > 0 && (
                      <Badge className="counter-item">
                        {teacherCounter[FacultyID]}
                      </Badge>
                    )}
                    <span onClick={() => onDeleteTeacher(teacher.FacultyID)} className="remove-icon" color='danger'>
                      <RxCross2 />
                    </span>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default TimeTable;