import React, { useEffect, useRef, useState } from 'react';
import { batch, teachers_list, time } from '../List/List';
import "./TimeTable.scss";
import { RxCross2 } from "react-icons/rx";
// import { RiDeleteBin2Line } from "react-icons/ri";
// import htmlToCanvas from 'html-to-canvas';
import html2canvas from 'html2canvas';




const TimeTable = () => {

  
  
  const [tableWidth, setTableWidth] = useState(0);
  const [draggedCellKey, setDraggedCellKey] = useState(null);
  const [duplicateElements, setDuplicateElements] = useState({});
  const [duplicateDetected, setDuplicateDetected] = useState(false);
  const [teacher, setTeacher] = useState({});
  const [teacherCounter, setTeacherCounter] = useState({}); // key: teacherId, value: counter
  const [teacherAssignment, setTeacherAssignment] = useState({});
  
  
  const [image, setImage] = useState(null);   //  for div to image conversion
  const divRef = useRef(null);

  const convertToImage = () => {
    html2canvas(divRef.current).then(canvas => {
      const imgData = canvas.toDataURL();
      setImage(imgData);
    }).catch(error => {
      console.error(error);
    });
  };             // for div to image conversion

  
  
  
  
  const dragItem = useRef();
  // const dragOverItem = useRef();
  // const ref=useRef();

  // const dragStart = (e, position) => {
  //   dragItem.current = position;
  //   // console.log(e.target.innerHTML);
  // };
  
  const dragStart = (e, teacherInfo) => {
    dragItem.current = teacherInfo;
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
  }
};

    useEffect(() => {
      if (duplicateDetected) {
        // alert('Two same teachers found in the same row');   
        setDuplicateDetected(false);
      }
    }, [duplicateDetected]);

    const allowDrop = (ev) => {
      let t = ev.target;
      while (t && (!t.classList || !t.classList.contains("each-block"))) {
        t = t.parentNode;
      }
      if (t && t.innerHTML.trim() !== "") {
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
                        <td className='F-style batch-style'>{each.batchname}</td>
                      )
                    })}

              </tr>
            </div>
            <tr >
              {time.map((t) => {
                return (

                  <div >
                    <td className='F-style time-style'>{t.classtime}</td>

                      {batch.map((b) => {

                        const key = t.id + '_' + b.id
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

                        <div className="teacher-name">
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
       </div>
       <button onClick={convertToImage}>Convert to Image</button>
      {image && <img src={image} alt="table" style={{ maxWidth: tableWidth}}/>}
      
    </div>
    

        <div className='teacher-container'style={{ maxWidth: tableWidth}}>
          {teachers_list.map((teacher, index) => {
          const { name, bgColor, className } = teacher;
          return (
            <div
  style={{ maxWidth: tableWidth }}
  key={name}
  className={`teacher-item  ${bgColor} ${className}`}
  draggable={true}
  onDragStart={(e) => dragStart(e, { teacher: name, className: bgColor })}
>
  <h3>{name}</h3>
  {teacherCounter[name] > 0 && (
    <span className={`counter-item ${bgColor}`} draggable={false}>
      {teacherCounter[name]}
    </span>
  )}
</div>            );
          })}
        </div>
      </div>
  </>
  )
  }

  export default TimeTable;