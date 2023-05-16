
import React, { useEffect, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { batch, teachers_list, time } from '../List/List';
// import { teachers_list } from '../../../const/teacherList';
// import { batch } from '../../../const/batchList';
// import { time } from '../../../const/time';
import "./TimeTable.scss";
// import { RiDeleteBin2Line } from "react-icons/ri";
// import htmlToCanvas from 'html-to-canvas';
import html2canvas from 'html2canvas';
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import AddBatch from '../AddBatch/AddBatch';
import UploadApi from '../../../api/upload.api';
import AddTeacher from '../TeacherForm/TeacherForm';




const TimeTable = () => {
  /**************************************** Use Effect Section ************************************/


  /**************************************** State Section *****************************************/
  const [tableWidth, setTableWidth] = useState(0);
  const [draggedCellKey, setDraggedCellKey] = useState(null);
  const [duplicateElements, setDuplicateElements] = useState({});
  const [duplicateDetected, setDuplicateDetected] = useState(false);
  const [teacher, setTeacher] = useState({});
  const [teacherCounter, setTeacherCounter] = useState({}); // key: teacherId, value: counter
  const [teacherAssignment, setTeacherAssignment] = useState({});
  const [lectureList, setLectureList] = useState([]);
  const [addBatch, setAddBatch] = useState(null);
  // const [numberList, setNumberList] = useState([918989529107, 917898118503, 918871688429, 918349215747,919826362001,918349215747,917314058393,917869597239,919977116612,918085390900,918302184021,918358810742,919893640561,919713519598,919713030834,919827274005,919691938832,917043127836,919977711607,917298519996,919713191848,918871841238,917007794323,919669889020,918770153381]);
  const [numberList, setNumberList] = useState([917898118503]);
  const [batchList, setBatchList] = useState(batch);
  const [image, setImage] = useState(null);   //  for div to image conversion
  const [showAddBatchModal, setShowAddBatchModal] = useState(false); //for add Batch popup
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const[fromDate,setFromDate]=useState("");
  const[toDate,setToDate]=useState("");




  /**************************************** Use Effect Section ************************************/
  useEffect(() => {
    const tableElement = document.querySelector('.table-style');
    if (tableElement) {
      const tableWidth = tableElement.offsetWidth;
      setTableWidth(tableWidth);
    }
  }, []);

  useEffect(() => {
    if (duplicateDetected) {
      alert('Two same teachers found in the same row');
      setDuplicateDetected(false);
      setTimeout(() => {
        setDuplicateElements({});
      }, 3000); // Blink duration
    }
  }, [duplicateDetected]);


  useEffect(() => {
    if (duplicateDetected) {
      // alert('Two same teachers found in the same row');   
      setDuplicateDetected(false);
    }
  }, [duplicateDetected]);


  /**************************************** Component Method Section *********************************/

  const divRef = useRef(null);

  const color = ["#D4E6F1", "#E8DAEF", "#008080", "#808000", "#C39BD3", "#76D7C4", "#3498DB", "#358b79", "#847f86", "rgb(251, 235, 9)", "#CA6F1E", "#CCCCFF", "#F4D03F", "rgb(199, 185, 84)", "#979A9A", "#F0B27A", "rgb(117, 98, 179)", "#CD5C5C", "#40E0D0", "#DAF7A6", "#008080", "#808000", "#FADBD8", "green", "yellow", "white", "red", "pink"]


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
        for (let i = 0; i < numberList.length; i++) {
          try {
            const cell = numberList[i];
            /*CHECK THE DETAILS OF THIS GETWATTSAPPAPI IN UPLOAD.API.JS FILE IN API FOLDER*/
            await new UploadApi().getWattsappApi(fileDetail.LongURL, "time table", cell, fileName);
            // await new UploadApi().getWattsappGroupApi(fileDetail.LongURL, "time table", fileName);
          } catch (e) {
            continue;
          }
        }
      }

    }
    alert("Time table image sent successfully")
  }

  const dragItem = teacher;

  const dragStart = (e, teacherInfo) => {
    dragItem.current = teacherInfo;
    console.log(teacherInfo)
  };

  const handleTableCellDragStart = (e, key) => {
    setDraggedCellKey(key);
  };

  const checkForDuplicateInRow = (key) => {
    const rowId = key.split('_')[0];
    const teacherInCurrentRow = [];
    for (const cellKey in teacherAssignment) {
      if (cellKey.startsWith(rowId)) {
        teacherInCurrentRow.push({
          key: cellKey,
          teacher: teacherAssignment[cellKey].teacher,
        });
      }
    }

    const duplicates = teacherInCurrentRow.reduce((acc, item) => {
      if (acc[item.teacher]) {
        acc[item.teacher].push(item.key);
      } else {
        acc[item.teacher] = [item.key];
      }
      return acc;
    }, {});

    const newDuplicateKeys = Object.values(duplicates)
      .filter((keys) => keys.length > 1)
      .flat();

    const oldDuplicateKeys = Object.keys(duplicateElements);
    const isNewDuplicate = !oldDuplicateKeys.includes(key) && newDuplicateKeys.includes(key);

    if (isNewDuplicate) {
      setDuplicateDetected(true);
      setDuplicateElements(
        newDuplicateKeys.reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
    }
  };

  const handleDrop = (e, key) => {
    console.log(key)
    console.log("drag cell key", draggedCellKey);
    if (draggedCellKey) {
      // Move table item
      const sourceAssignment = teacherAssignment[draggedCellKey];
      const targetAssignment = teacherAssignment[key];

      setTeacherAssignment({
        ...teacherAssignment,
        [draggedCellKey]: targetAssignment,
        [key]: sourceAssignment,
      });

      setDraggedCellKey(null);
    } else {
      // Assign teacher to the cell
      const teacher_assignment = teacherAssignment;
      teacherAssignment[key] = dragItem.current;
      setTeacherAssignment({ ...teacher_assignment });
      setTeacher({});
      const teacherCount = teacherCounter;
      if (!teacherCount[dragItem.current.teacher]) {
        teacherCount[dragItem.current.teacher] = 1;
      } else {
        teacherCount[dragItem.current.teacher] += 1;
      }
      setTeacherCounter({ ...teacherCount });
      checkForDuplicateInRow(key);

      const teacher = teacherAssignment[key];
      const batchId = key.split("_")[1];
      const lectureId = key.split("_")[0];
      const batchVo = batch.find(it => it.BatchID == batchId);
      console.log('xxxx xx xx teacher ', teacher);
      console.log('xxxx xx xx batchId ', batchId);
      console.log('xxxx xx xx lectureId', lectureId);
      console.log('xxxx xx xx teacherAssignment', teacherAssignment);

      // making lectureVO 
      const lectureVo = time.find(it => it.LectureID == lectureId);

      const lecture = {};
      lecture.ID = "0";
      lecture.TimeTableID = "0";
      lecture.LectureName = "";
      lecture.Batch = batchVo;
      lecture.Lecture = lectureVo;
      lecture.Subject = teacher.subject;
      lecture.FacultyID = teacher.FacultyID;
      lecture.IsActive = true;
      lecture.CreatedByUserID = "1";
      lecture.CreatedOnDate = "02/05/2023";
      console.log("fff", lecture);
      console.log("zzzz", teacher)

      const lecture_list = lectureList;
      lecture_list.push(lecture);
      setLectureList([...lecture_list])
      /* THIS LECTURE LIST WILL BE USED BELOW IN THE CONST SAVETABLE() METHOD FROM WHERE WE SEND IT TO DATABASE THROUGH API WRITTEN IN SAVETABLE() METHOD*/
    }
  }
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
  const removeTeacher = (key) => {
    const teacher_assignment = teacherAssignment;
    setTeacherAssignment({ ...teacher_assignment });
    setTeacher({});
    const teacherCount = teacherCounter;
    if ([teacherAssignment[key].teacher]) {
      teacherCount[teacherAssignment[key].teacher] -= 1;
    }
    delete teacherAssignment[key].teacher;
    delete teacherAssignment[key].color;
    // else {
    //   teacherCounts[teacherAssignment[key]] += 1;
    // }
    // setTeacherCounter({...teacherCounter});
    setTeacherCounter(teacherCount);
  }

  const onChangeFromDate=(e)=>{
    setFromDate(e.target.value);
  }
  const onChangeToDate=(e)=>{
    setToDate(e.target.value);
  }
  
  const onAddBatch = () => {
    // setAddBatch(<AddBatch batchList={batchList} />)
    setShowAddBatchModal(true);
  }
  const onAddTeacher = () => {
    setShowAddTeacherModal(true);
  }
  const saveTable = () => {
    // localStorage.setItem("teacherA", JSON.stringify(teacherAssignment));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "TimeTableID": 0,
      "Description": "time table save",
      "DateType": "single",
      "FromDate": fromDate,
      "ToDate": toDate,
      "ShiftID": 1,
      "SessionID": 5,
      "Session": "string",
      "BatchID": [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
      ],
      "LectureID": [
        1, 2, 3, 4, 5, 6, 7, 8
      ],
      "IsActive": true,
      "CreatedByUserID": 1,
      "CreatedOnDate": new Date().toLocaleString(),
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
      alert("time table saved successfully");
  };

  /**************************************** Template Section *****************************************/
  return (
    <>
      <div className="bg-container">
        <h1 className='heading-style'>CLASS SCHEDULE</h1>
        <div className="button-group added-style">
          <Button className="btn " color="info" onClick={onAddBatch}>
            Add Batches
          </Button>
          {showAddBatchModal && <AddBatch showModal={showAddBatchModal} setShowModal={setShowAddBatchModal} />}
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
        </div>
        <div>
          <div ref={divRef}>
            <Form>
              <div className='time-table-date-style'>
                <FormGroup>
                  <Label for="fromDate">From Date</Label>
                  <Input
                    id="fromDate"
                    name="date"
                    type="date"
                    onChange={(e)=>{onChangeFromDate(e)}}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="toDate">To Date</Label>
                  <Input
                    id="toDate"
                    name="date"
                    type="date"
                    onChange={(e)=>{onChangeToDate(e)}}

                  />
                </FormGroup>
              </div>
            </Form>
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
                        {batchList.map((b) => {
                          const key = t.LectureID + '_' + b.BatchID
                          return (
                            <td
                              draggable={true}
                              onDragOver={allowDrop}
                              onDrop={(e) => handleDrop(e, key)}
                              onDragStart={(e) => teacherAssignment[key] && handleTableCellDragStart(e, key)}
                              key={key}
                              id={key}
                              className={`each-block ${duplicateElements[key] ? "blink" : ""}`}
                              style={{ backgroundColor: teacherAssignment[key]?.color }}
                            // className={`each-block ${duplicateElements[key]}`}
                            >
                              {teacherAssignment[key] && (
                                <div className={`teacname-cross-style ${teacherAssignment[key]?.className} `}>
                                  <div className="teacher-name" >
                                    {teacherAssignment[key]?.teacher}
                                  </div>
                                  <div className="cross-btn-container">
                                    {teacherAssignment[key]?.teacher ? (
                                      <button
                                        className="cross-style"
                                        onClick={() => removeTeacher(key)}
                                      >
                                        {/* <RiDeleteBin2Line /> */}
                                        <RxCross2 />
                                      </button>
                                    ) : (
                                      ''
                                    )}
                                  </div>
                                </div>
                              )}
                            </td>
                          )
                        })}
                      </div>
                    )
                  })}
                </tr>
              </tbody>
            </table>
            {/* <button onClick={onAddBatch}>+</button>
            {addBatch} */}
          </div>

          {/* {image && <img src={image} alt="table" style={{ maxWidth: tableWidth }} />} */}
          {/* <button onClick={saveTable}>Save</button> */}
        </div>
        <div className='teacher-container' style={{ maxWidth: tableWidth }}>
          {teachers_list.map((teacher, index) => {
            const { FacultyID, Faculty } = teacher;
            return (
              <div
                style={{ maxWidth: tableWidth, backgroundColor: color[index % color.length] }}
                key={FacultyID}
                className="teacher-item"
                draggable={true}
                onDragStart={(e) => dragStart(e, { teacher:Faculty, color: color[index % color.length] })}
              >
                <h3>{Faculty}</h3>
                {teacherCounter[Faculty] > 0 && (
                  <span className={`counter-item `} draggable={false}>
                    {teacherCounter[Faculty]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
export default TimeTable;