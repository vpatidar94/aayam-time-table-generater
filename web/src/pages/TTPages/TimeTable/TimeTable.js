// import React, { useEffect, useRef, useState } from 'react';
// import { batch, teachers_list, time } from '../List/List';
// import "./TimeTable.scss";
// import { RxCross2 } from "react-icons/rx";
// // import { RiDeleteBin2Line } from "react-icons/ri";
// // import htmlToCanvas from 'html-to-canvas';
// import html2canvas from 'html2canvas';




// const TimeTable = () => {

  
  
//   const [tableWidth, setTableWidth] = useState(0);
//   const [draggedCellKey, setDraggedCellKey] = useState(null);
//   const [duplicateElements, setDuplicateElements] = useState({});
//   const [duplicateDetected, setDuplicateDetected] = useState(false);
//   const [teacher, setTeacher] = useState({});
//   const [teacherCounter, setTeacherCounter] = useState({}); // key: teacherId, value: counter
//   const [teacherAssignment, setTeacherAssignment] = useState({});
  
  
//   const [image, setImage] = useState(null);   //  for div to image conversion
//   const divRef = useRef(null);


  

//   const convertToImage = () => {
//     html2canvas(divRef.current).then(canvas => {
//       const imgData = canvas.toDataURL();
//       setImage(imgData);
//     }).catch(error => {
//       console.error(error);
//     });
//   };             // for div to image conversion

  
  
  
  
//   const dragItem = useRef();
//   // const dragOverItem = useRef();
//   // const ref=useRef();

//   // const dragStart = (e, position) => {
//   //   dragItem.current = position;
//   //   // console.log(e.target.innerHTML);
//   // };
  
//   const dragStart = (e, teacherInfo) => {
//     dragItem.current = teacherInfo;
//   };

//   // const dragEnter = (e, position, teacherDragged, className) => {
//   //   if (!teacher || !teacher.teacher) {
//   //     setTeacher({teacher: teacherDragged, className});
//   //   }
//   // };

//   const handleTableCellDragStart = (e, key) => {
//     setDraggedCellKey(key);
//   };


//   const checkForDuplicateInRow = (key) => {
//     const rowId = key.split('_')[0];
//     const teacherInCurrentRow = [];
  
//     for (const cellKey in teacherAssignment) {
//       if (cellKey.startsWith(rowId)) {
//         teacherInCurrentRow.push({
//           key: cellKey,
//           teacher: teacherAssignment[cellKey].teacher,
//         });
//       }
//     }
  
//     const duplicates = teacherInCurrentRow.reduce((acc, item) => {
//       if (acc[item.teacher]) {
//         acc[item.teacher].push(item.key);
//       } else {
//         acc[item.teacher] = [item.key];
//       }
//       return acc;
//     }, {});
  
//     const newDuplicateKeys = Object.values(duplicates)
//       .filter((keys) => keys.length > 1)
//       .flat();
  
//     const oldDuplicateKeys = Object.keys(duplicateElements);
  
//     const isNewDuplicate = !oldDuplicateKeys.includes(key) && newDuplicateKeys.includes(key);
  
//     if (isNewDuplicate) {
//       setDuplicateDetected(true);
//       setDuplicateElements(
//         newDuplicateKeys.reduce((acc, key) => {
//           acc[key] = true;
//           return acc;
//         }, {})
//       );
//     }
//   };


//   useEffect(() => {
//     const tableElement = document.querySelector('.table-style');
//     if (tableElement) {
//       const tableWidth = tableElement.offsetWidth;
//       setTableWidth(tableWidth);
//     }
//   }, []);

//   useEffect(() => {                                           
//     if (duplicateDetected) {
//       alert('Two same teachers found in the same row');
//       setDuplicateDetected(false);
//       setTimeout(() => {
//         setDuplicateElements({});
//       }, 3000); // Blink duration
//     }
//     }, [duplicateDetected]);                                   


  
//     const handleDrop = (e, key) => {
//   if (draggedCellKey) {
//     // Move table item
//     const sourceAssignment = teacherAssignment[draggedCellKey];
//     const targetAssignment = teacherAssignment[key];

//     setTeacherAssignment({
//       ...teacherAssignment,
//       [draggedCellKey]: targetAssignment,
//       [key]: sourceAssignment,
//     });

//     setDraggedCellKey(null);
//   } else {
//     // Assign teacher to the cell
//     const teacher_assignment = teacherAssignment;
//     teacherAssignment[key] = dragItem.current;
//     setTeacherAssignment({ ...teacher_assignment });
//     setTeacher({});
//     const teacherCount = teacherCounter;
//     if (!teacherCount[dragItem.current.teacher]) {
//       teacherCount[dragItem.current.teacher] = 1;
//     } else {
//       teacherCount[dragItem.current.teacher] += 1;
//     }
//     setTeacherCounter({ ...teacherCount });
//     checkForDuplicateInRow(key);
//   }
// };

//     // useEffect(() => {
//     //   if (duplicateDetected) {
//     //     // alert('Two same teachers found in the same row');   
//     //     setDuplicateDetected(false);
//     //   }
//     // }, [duplicateDetected]);


//     useEffect(() => {
//       const savedData = localStorage.getItem("teacherA");
//       if (savedData) {
//         setTeacherAssignment(JSON.parse(savedData));
//       }
//     }, []);




//     const allowDrop = (ev) => {
//       let t = ev.target;
//       while (t && (!t.classList || !t.classList.contains("each-block"))) {
//         t = t.parentNode;
//       }
//       if (t && t.innerText.trim() !== "") {
//         // Prevent drop event if cell is not empty
//         return false;
//       }
//       ev.preventDefault();
//     };

  
  
//     const removeTeacher = (key) => {
//     const teacher_assignment = teacherAssignment;
//     setTeacherAssignment({ ...teacher_assignment });
//     setTeacher({});
//     const teacherCount = teacherCounter;
//     if ([teacherAssignment[key].teacher]) {
//       teacherCount[teacherAssignment[key].teacher]-=1;
//     } 
//     delete teacherAssignment[key].teacher;
//     delete teacherAssignment[key].className;
//     // else {
//     //   teacherCounts[teacherAssignment[key]] += 1;
//     // }
//     // setTeacherCounter({...teacherCounter});
//     setTeacherCounter(teacherCount);
//     }
    

//     const saveTable = () => {
//       localStorage.setItem("teacherA", JSON.stringify(teacherAssignment));
//     };
  
//     return (
//       <>
//       <div className="bg-container">
      
//        <h1 className='heading-style'>CLASS SCHEDULE</h1>
//       <div>
//        <div ref={divRef}>
//         <table className='table-style'>
//           <tbody>
//             <div className="for-time">
//               <tr>
//                 <td className='F-style time-style'>Time</td>
//                     {batch.map((each) => {
//                       return (
//                         <td className='F-style batch-style'>{each.batchname}</td>
//                       )
//                     })}

//               </tr>
//             </div>
//             <tr >
//               {time.map((t) => {
//                 return (

//                   <div >
//                     <td className='F-style time-style'>{t.classtime}</td>

//                       {batch.map((b) => {

//                         const key = t.id + '_' + b.id
//                         return (

//                     <td
//                       draggable={true}
//                       onDragOver={allowDrop}
//                       onDrop={(e) => handleDrop(e, key)}
//                       onDragStart={(e) => teacherAssignment[key] && handleTableCellDragStart(e, key)}
//                       key={key}
//                       id={key}
//                       className={`each-block ${duplicateElements[key] ? "blink" : ""}`}        
//                       // className={`each-block ${duplicateElements[key]}`}
//                     >
                    
//                       {teacherAssignment[key] && (
//                         <div className={`teacname-cross-style ${teacherAssignment[key]?.className} `}>

//                         <div className="teacher-name">
//                           {teacherAssignment[key]?.teacher}
//                         </div>
//                         <div className="cross-btn-container">
//                           {teacherAssignment[key]?.teacher ? (
//                             <button
//                               className="cross-style"
//                               onClick={() => removeTeacher(key)}
//                             >
//                               {/* <RiDeleteBin2Line /> */}
//                               <RxCross2/>
//                             </button>
//                           ) : (
//                             ''
//                           )}
//                         </div>
//                         </div>
//                       )}
//                     </td>

//                       )
//                     })}
//                   </div>

//                 )
//                 })}



//             </tr>
//           </tbody>
//         </table>
//        </div>
//        <button onClick={convertToImage}>Convert to Image</button>
//       {image && <img src={image} alt="table" style={{ maxWidth: tableWidth}}/>}
//       <button onClick={saveTable}>Save</button>
      
//     </div>
    

//         <div className='teacher-container'style={{ maxWidth: tableWidth}}>
//           {teachers_list.map((teacher, index) => {
//           const { name, bgColor, className } = teacher;
//           return (
//             <div
//               style={{ maxWidth: tableWidth }}
//               key={name}
//               className={`teacher-item  ${bgColor} ${className}`}
//               draggable={true}
//               onDragStart={(e) => dragStart(e, { teacher: name, className: bgColor })}
//             >
//               <h3>{name}</h3>
//               {teacherCounter[name] > 0 && (
//                 <span className={`counter-item ${bgColor}`} draggable={false}>
//                   {teacherCounter[name]}
//                 </span>
//               )}
//             </div>            
//             );
//           })}
//         </div>
//       </div>
//   </>
//   )
//   }

//   export default TimeTable;
















import React, { useEffect, useRef, useState } from 'react';
import { batch, teachers_list, time } from '../List/List';
import "./TimeTable.scss";
import { RxCross2 } from "react-icons/rx";
// import { RiDeleteBin2Line } from "react-icons/ri";
// import htmlToCanvas from 'html-to-canvas';
import html2canvas from 'html2canvas';
import AddBatch from '../AddBatch/AddBatch';






const TimeTable = () => {

  
  
  const [tableWidth, setTableWidth] = useState(0);
  const [draggedCellKey, setDraggedCellKey] = useState(null);
  const [duplicateElements, setDuplicateElements] = useState({});
  const [duplicateDetected, setDuplicateDetected] = useState(false);
  const [teacher, setTeacher] = useState({});
  const [teacherCounter, setTeacherCounter] = useState({}); // key: teacherId, value: counter
  const [teacherAssignment, setTeacherAssignment] = useState({});
  const[updateTT,setUpdateTT]=useState({});
  const[lectList,setLectList]=useState([]);
  const[lectureList,setLectureList]=useState([]);
  const[addBatch,setAddBatch]=useState(null);
  
  
  
  
  const [image, setImage] = useState(null);   //  for div to image conversion
  const divRef = useRef(null);


  const color=["blue","green","yellow","white","red","pink"]

  const convertToImage = () => {
    html2canvas(divRef.current).then(canvas => {
      const imgData = canvas.toDataURL();
      setImage(imgData);
    }).catch(error => {
      console.error(error);
    });
  };             // for div to image conversion

  
  
  
  
  const dragItem = teacher;
  // const dragOverItem = useRef();
  // const ref=useRef();

  // const dragStart = (e, position) => {
  //   dragItem.current = position;
  //   // console.log(e.target.innerHTML);
  // };
  
  const dragStart = (e, teacherInfo) => {
    dragItem.current = teacherInfo;
    console.log(teacherInfo)
  };

  // const dragEnter = (e, position, teacherDragged, className) => {
  //   if (!teacher || !teacher.teacher) {
  //     setTeacher({teacher: teacherDragged, className});
  //   }
  // };

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
    const lectureId= key.split("_")[0];

    const batchVo = batch.find(it => it.BatchID == batchId);
    console.log('xxxx xx xx teacher ', teacher);
    console.log('xxxx xx xx batchId ', batchId);
    console.log('xxxx xx xx lectureId', lectureId);
    
    console.log('xxxx xx xx teacherAssignment', teacherAssignment);


    // making lectureVO 

    const lectureVo=time.find(it=> it.LectureID==lectureId);

    const lecture = {};
    lecture.ID="0";
    lecture.TimeTableID="0";
    lecture.LectureName="";
    lecture.Batch=batchVo;
    lecture.Lecture=lectureVo;
    lecture.Subject=teacher.subject;
    lecture.FacultyID=teacher.FacultyID;
    lecture.IsActive=true;
    lecture.CreatedByUserID="1";
    lecture.CreatedOnDate="02/05/2023";
    console.log("fff",lecture);

    

    const lecture_list = lectureList;
    lecture_list.push(lecture);
    setLectureList([...lecture_list])
    
    

    
      
  //     const LectureList =
  //       {
  //         "Batch": {
  //           "BatchID":key.split("_")[1],
  //           "Batch": batch.BatchID
  //         },
  //         "Lecture": {  
  //           "LectureID": key.split("_")[0],
  //           "Lecture": time.Lecture,
  //           "Time_From": time.Time_From,
  //           "Time_To": time.Time_To
  //         },
  //         "Subject": teacherAssignment[key]?.subject,
  // "FacultyID": teacherAssignment[key],
  //       }
        
  //       setLectList(prevList => [...prevList, { LectureList: [LectureList] }]);

  //   }
  // }
  // console.log(lectList)
  
  }}


    useEffect(() => {
      if (duplicateDetected) {
        // alert('Two same teachers found in the same row');   
        setDuplicateDetected(false);
      }
    }, [duplicateDetected]);


    // useEffect(() => {
    //   const savedData = localStorage.getItem("teacherA");
    //   if (savedData) {
    //     setTeacherAssignment(JSON.parse(savedData));
    //   }
    // }, []);




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
      teacherCount[teacherAssignment[key].teacher]-=1;
    } 
    delete teacherAssignment[key].teacher;
    delete teacherAssignment[key].className;
    // else {
    //   teacherCounts[teacherAssignment[key]] += 1;
    // }
    // setTeacherCounter({...teacherCounter});
    setTeacherCounter(teacherCount);
    }
    
    const onAddBatch=()=>{
      setAddBatch(<AddBatch/>)
    }
    const onAddTeacher=()=>{
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
    1,6,10,7,8,9,2,3
  ],
  "LectureID": [
    1,2,3,4,5,6,7,8
  ],
  "IsActive": true,
  "CreatedByUserID": 1,
  "CreatedOnDate": "09/05/2023",
  "LectureList": lectureList
    // {
    //   "ID": 0,
    //   "TimeTableID": 0,
    //   "LectureName": "",
    //   "Batch": {
    //     "BatchID": 1
    //   },
    //   "Lecture": {
    //     "LectureID": 1,
    //     "Time_From": "10:00 AM",
    //     "Time_To": "11:00 AM"
    //   },
    //   "Subject": "Physics",
    //   "FacultyID": 1,
    //   "IsActive": true,
    //   "CreatedByUserID": 1,
    //   "CreatedOnDate": "02/05/2023"
    // },
    // {
    //   "ID": 0,
    //   "TimeTableID": 0,
    //   "LectureName": "",
    //   "Batch": {
    //     "BatchID": 1
    //   },
    //   "BatchID": 0,
    //   "Lecture": {
    //     "LectureID": 2,
    //     "Time_From": "11:00 AM",
    //     "Time_To": "12:00 PM"
    //   },
    //   "Subject": "Maths",
    //   "FacultyID": 2,
    //   "IsActive": true,
    //   "CreatedByUserID": 1,
    //   "CreatedOnDate": "02/05/2023"
    // },
    // {
    //   "ID": 0,
    //   "TimeTableID": 0,
    //   "LectureName": "",
    //   "Batch": {
    //     "BatchID": 2
    //   },
    //   "BatchID": 0,
    //   "Lecture": {
    //     "LectureID": 1,
    //     "Time_From": "10:00 AM",
    //     "Time_To": "11:00 AM"
    //   },
    //   "Subject": "Maths",
    //   "FacultyID": 1,
    //   "IsActive": true,
    //   "CreatedByUserID": 1,
    //   "CreatedOnDate": "02/05/2023"
    // },
    // {
    //   "ID": 0,
    //   "TimeTableID": 0,
    //   "LectureName": "",
    //   "Batch": {
    //     "BatchID": 2
    //   },
    //   "BatchID": 0,
    //   "Lecture": {
    //     "LectureID": 2,
    //     "Time_From": "11:00 AM",
    //     "Time_To": "12:00 PM"
    //   },
    //   "Subject": "Chemistry",
    //   "FacultyID": 2,
    //   "IsActive": true,
    //   "CreatedByUserID": 1,
    //   "CreatedOnDate": "02/05/2023"
    // }
  
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
                      onDrop={(e) => handleDrop(e, key)}
                      onDragStart={(e) => teacherAssignment[key] && handleTableCellDragStart(e, key)}
                      key={key}
                      id={key}
                      className={`each-block ${duplicateElements[key] ? "blink" : ""}`}        
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
                              <RxCross2/>
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
        <button onClick={onAddBatch}>+</button>
        {addBatch}
       </div>
       <button onClick={convertToImage}>Convert to Image</button>
      {image && <img src={image} alt="table" style={{ maxWidth: tableWidth}}/>}
      <button onClick={saveTable}>Save</button>
      
    </div>
    

        <div className='teacher-container'style={{ maxWidth: tableWidth}}>
          {teachers_list.map((teacher, index) => {
          {/* const { name, bgColor, className } = teacher; */}
          const {FacultyID,Faculty  } = teacher;
          return (
            <div
              style={{ maxWidth: tableWidth, backgroundColor:color[FacultyID]}}
              key={Faculty}
              className="teacher-item"
              draggable={true}
              onDragStart={(e) => dragStart(e, {teacher:Faculty})}
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
          <button onClick={onAddTeacher}>+</button>
          
        </div>
        
      </div>
  </>
  )
  }

  export default TimeTable;