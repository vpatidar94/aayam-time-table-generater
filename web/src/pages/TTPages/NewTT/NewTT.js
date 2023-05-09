
import React, { useEffect, useRef, useState } from 'react';
import { batch, teachers_list, time } from '../List/List';
import { RxCross2 } from "react-icons/rx";
// import { RiDeleteBin2Line } from "react-icons/ri";
// import htmlToCanvas from 'html-to-canvas';
import "./NewTT.css";
import html2canvas from 'html2canvas';



const NewTT = () => {

const [apiData, setApiData] = useState({});

  


  const [tableWidth, setTableWidth] = useState(0);
  const [draggedCellKey, setDraggedCellKey] = useState(null);
  const [duplicateElements, setDuplicateElements] = useState({});
  const [duplicateDetected, setDuplicateDetected] = useState(false);
  const [teacher, setTeacher] = useState({});
  const [teacherCounter, setTeacherCounter] = useState({}); // key: teacherId, value: counter
  const [teacherAssignment, setTeacherAssignment] = useState({});

  // const [teacherAssignment, setTeacherAssignment] = useState(() => {
  //   const saved = localStorage.getItem("teacherAssignment");
  //   const data = saved ? JSON.parse(saved) : {};
  
  //   console.log("Loaded teacherAssignment:", data
  //   return data;
  // });
  
  // const [teacherCounter, setTeacherCounter] = useState(() => {
  //   const saved = localStorage.getItem("teacherCounter");
  //   const data = saved ? JSON.parse(saved) : {};
  //   console.log("Loaded teacherCounter:", data);
  //   return data;
  // });
  
  
  
  
  
  const [image, setImage] = useState(null);   //  for div to image conversion

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    console.log("Saving teacherAssignment:", teacherAssignment);
    console.log("Saving teacherCounter:", teacherCounter);
    const saved = localStorage.getItem("teacherAssignment");
    const data = saved ? JSON.parse(saved) : {};
    setTeacherAssignment(data);
    console.log(teacherAssignment);
    // localStorage.setItem("teacherAssignment", JSON.stringify(teacherAssignment));
    // localStorage.setItem("teacherCounter", JSON.stringify(teacherCounter));
  }, []);
  
  



  const divRef = useRef(null);

  const callApi=()=>{
  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  
  // fetch("http://api.hexaloop.in//api/GetMasterData", requestOptions)
  // .then(response => response.json())
  // .then(result => setApiData(result))
  // .catch(error => console.log('error', error));
    
  // }
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData", requestOptions)
  .then(response => response.json())
  .then(result => setApiData(result))
  .catch(error => console.log('error', error));
    
  }


  const { Object: responseObject = {} } = apiData;
  const { Batch = [],FacultyList=[] } = responseObject;

  

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
        const teacher_assignment = { ...teacherAssignment };
        teacher_assignment[key] = dragItem.current;
        setTeacherAssignment(teacher_assignment);
    
        setTeacher({});
    
        const teacherCount = { ...teacherCounter };
        if (!teacherCount[dragItem.current.teacher]) {
          teacherCount[dragItem.current.teacher] = 1;
        } else {
          teacherCount[dragItem.current.teacher] += 1;
        }
        setTeacherCounter(teacherCount);
    
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
      if (t && t.innerText.trim() !== "" ) {
        // Prevent drop event if cell is not empty
        return false;
      }
      ev.preventDefault();
    };

  
  
    const removeTeacher = (key) => {
      const teacher_assignment = { ...teacherAssignment };
      const teacherCount = { ...teacherCounter };
    
      if (teacherCount[teacherAssignment[key].teacher]) {
        teacherCount[teacherAssignment[key].teacher] -= 1;
      }
    
      delete teacher_assignment[key];
    
      setTeacherAssignment(teacher_assignment);
      setTeacher({});
      setTeacherCounter(teacherCount);
    };
    
        
  
    return (
      <>
      <button onClick={callApi}>Call</button>
      {/* <div>
      <ul>
        {Batch.map((batch) => (
          <li key={batch.BatchID}>{batch.Batch}</li>
        ))}
      </ul>
    </div> */}
      <div className="bg-container">
      
       <h1 className='heading-style'>CLASS SCHEDULE</h1>
      <div>
       <div ref={divRef}>
       <table className='table-style'>
  <tbody>
    <tr>
      <td className='F-style time-style'>Time</td>
      {/* {batch.map((each) => {
        return (
          <td className='F-style batch-style'>{each.batchname}</td>
        )
      })} */}

      {Batch.map((batch) => {
        return(
          <td className='F-style batch-style' key={batch.BatchID}>{batch.Batch}</td>
        )})}
    </tr>
    {time.map((t) => {
      return (
        <tr>
          <td className='F-style time-style'>{t.classtime}</td>
          {/* {batch.map((b) => { */}
          {Batch.map((b) => {

            const key = t.id + '_' + b.id
            return (
              <td
                draggable={true}
                onDragOver={allowDrop}
                onDrop={(e) => handleDrop(e, key)}
                onDragStart={(e) => teacherAssignment[key] && handleTableCellDragStart(e, key)}
                key={key}
                id={key}
                className={`each-block ${duplicateElements[key] ? "blink" : ""} ${teacherAssignment[key]?.className}`}
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
        </tr>
      )
    })}
  </tbody>
</table>

       </div>
       <button onClick={convertToImage}>Convert to Image</button>
      {image && <img src={image} alt="table" style={{ maxWidth: tableWidth}}/>}
      
    </div>
    

        <div className='teacher-container'style={{ maxWidth: tableWidth}}>
          {/* {teachers_list.map((teacher, index) => {
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
</div>            ); */}



{FacultyList.map((teacher, index) => {
          const { name, bgColor, className } = teacher;
          return (
            <div
  style={{ maxWidth: tableWidth }}
  key={name}
  className={`teacher-item  ${bgColor} ${className}`}
  draggable={true}
  onDragStart={(e) => dragStart(e, { teacher: name, className: bgColor })}
>
  <h3>{teacher.Faculty}</h3>
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

  
  

export default NewTT;
