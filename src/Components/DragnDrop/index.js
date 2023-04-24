import React, { useEffect, useRef, useState } from 'react';
import { batch, teachers_list, time } from '../List';
import "./index.css";
import {RxCross2} from "react-icons/rx";

// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import parse from "html-react-parser";


const DragnDrop = () => {
  const [teacher, setTeacher] = useState("");
  const [teacherAssignment, setTeacherAssignment] = useState({});
  const[counterMyk,setCounterMyk]=useState(0);
  const[counterKps,setCounterKps]=useState(0);
  const[counterMrs,setCounterMrs]=useState(0);
  const[counterMas,setCounterMas]=useState(0);
  const[counterRss,setCounterRss]=useState(0);
  const[counterNms,setCounterNms]=useState(0);
  const[counterHds,setCounterHds]=useState(0);
  const[counterMnm,setCounterMnm]=useState(0);
  const[counterSj,setCounterSj]=useState(0);
  const[counterAj,setCounterAj]=useState(0);
  const[counterDmps,setCounterDmps]=useState(0);
  const[counterPsj,setCounterPsj]=useState(0);
  const[counterYbs,setCounterYbs]=useState(0);
  const[counterAks,setCounterAks]=useState(0);
  const[counterAms,setCounterAms]=useState(0);
  const[counts,setCounts]=useState()

  // const[cross,setCross]=useState("");
  // const[crossState,setCrossState]=useState(true);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position, teacher) => {
    setTeacher(teacher);
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
  };

  const handleDrop = (e, key) => {
    const teacher_assignment = teacherAssignment;
    teacherAssignment[key] = teacher;
    setTeacherAssignment({ ...teacherAssignment, teacherAssignment: teacher_assignment });
    // if (teacherAssignment[key]==="MYK"){
    // setCounterMyk(counterMyk+1);

    
      if(teacherAssignment[key]){
        switch(teacherAssignment[key]){
        case "MYK":
          setCounterMyk(counterMyk+1);
          break;
        case "KPS":
          setCounterKps(counterKps+1)
          setCounts(counterKps)
          break;
          
    }}
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
    setCounterMyk(counterMyk-1);
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
                      
                      <td draggable={true} onDragOver={allowDrop}  onDrop={e => handleDrop(e, key)} key={key} id={key} className='dropzone F-style' >
                        {teacherAssignment[key]}
                        
                        {teacherAssignment[key] ?
                          (<button className={teachers_list.className} onClick={()=>removeTeacher(key)}><RxCross2/></button>):("")}
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
          const{name,className,count}=teacher;
          
          return (
            <>
            <div key={name} className={className} draggable={true} onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index, name)}>
              
              <h3 >{name}</h3>
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