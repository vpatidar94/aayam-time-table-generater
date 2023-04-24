import React, { useEffect, useRef, useState } from 'react';
import { batch, teachers_list, time } from '../List';
import "./index.css";
import { RxCross2 } from "react-icons/rx";

// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const DragnDrop = () => {
  const [teacher, setTeacher] = useState({});
  const [teacherCounter, setTeacherCounter] = useState({}); // key: teacherId, value: counter

  const [teacherAssignment, setTeacherAssignment] = useState({});
  const [counterMyk, setCounterMyk] = useState(0);
  const [counterKps, setCounterKps] = useState(0);
  const [counterMrs, setCounterMrs] = useState(0);
  const [counterMas, setCounterMas] = useState(0);
  const [counterRss, setCounterRss] = useState(0);
  const [counterNms, setCounterNms] = useState(0);
  const [counterHds, setCounterHds] = useState(0);
  const [counterMnm, setCounterMnm] = useState(0);
  const [counterSj, setCounterSj] = useState(0);
  const [counterAj, setCounterAj] = useState(0);
  const [counterDmps, setCounterDmps] = useState(0);
  const [counterPsj, setCounterPsj] = useState(0);
  const [counterYbs, setCounterYbs] = useState(0);
  const [counterAks, setCounterAks] = useState(0);
  const [counterAms, setCounterAms] = useState(0);
  const [counts, setCounts] = useState()

  // const[cross,setCross]=useState("");
  // const[crossState,setCrossState]=useState(true);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position, teacherDragged, className) => {
    if (!teacher || !teacher.teacher) {
      setTeacher({teacher: teacherDragged, className});
    }
  };

  const handleDrop = (e, key) => {
    console.log(teacher);
    const teacher_assignment = teacherAssignment;
    teacherAssignment[key] = teacher;
    console.log(teacherAssignment);
    setTeacherAssignment({ ...teacher_assignment });
    setTeacher({});
    const teacherCount = teacherCounter;
    if (!teacherCount[teacher.teacher]) {
      teacherCount[teacher.teacher] = 1;
    } else {
      teacherCount[teacher.teacher] += 1;
    }
    setTeacherCounter({...teacherCount});
    console.log(teacherAssignment);
  }

  const allowDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    // console.log('xxx xx xx ', event.target.id);

  }

  const removeTeacher = (key) => {
    // e.preventDefault();
    console.log('4');

    const teacher_assignment = teacherAssignment;
    delete teacherAssignment[key];

    // setTimeout(() => {
    setTeacherAssignment({ ...teacherAssignment, teacherAssignment: teacher_assignment });
    // }, 1000);
    setCounterMyk(counterMyk - 1);
    // setCrossState(false);
    // console.log(crossState)
  }
  //   const showCross=(key)=>{
  //     {crossState && (
  //     setCross(<button onClick={()=>removeTeacher(key)}><RxCross2/></button>)
  //     )

  //   }
  // }
  const html = '<div>Example HTML string</div>';
  return (
    <>

      <table className='table-style'>
        <tbody>
          <div className="for-time">
            <tr>
              <td className='F-style'>Time</td>


              {batch.map((each) => {
                return (
                  <td className='F-style'>{each.batchname}</td>
                )
              })}

            </tr>
          </div>
          <tr >
            {time.map((t) => {
              return (

                <div >
                  <td className='F-style'>{t.classtime}</td>

                  {batch.map((b) => {

                    const key = t.id + '_' + b.id
                    return (

                      <td draggable={true} onDragOver={allowDrop} onDrop={e => handleDrop(e, key)} key={key} id={key} className={'dropzone F-style'} >
                        {teacherAssignment[key]?.teacher}

                        {teacherAssignment[key]?.teacher ?
                          (<button className={teacherAssignment[key]?.className} onClick={() => removeTeacher(key)}><RxCross2 /></button>) : ("")}
                        {/* (<div>
                            <button onClick={()=>showCross(key)}>{cross}</button>
                          (<button onClick={()=>removeTeacher(key)}><RxCross2/></button>):("")}
                         </div> ):("")} */}
                      </td>


                    )
                  })}
                </div>

              )
            })}



          </tr>
        </tbody>
      </table>

      <div className="teacher-style">

        {teachers_list.map((teacher, index) => {
          const { name, className, count } = teacher;

          return (
            <>
              <div key={name} className={className} draggable={true} onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index, name, className)}>

                <h3 >{name}</h3>
                <span>{teacherCounter[name]}</span>
              </div>
              {/* {counterMyk} */}
              {/* {counts} */}
              {/* {counts} */}
            </>
          )
        })}
      </div>
    </>
  )
}

export default DragnDrop;