import React, { useRef, useState } from 'react';
import { batch, teachers_list, time } from '../List';
import "./index.css";

const DragnDrop = () => {
  const [teacher, setTeacher] = useState("");
  const [teacherAssignment, setTeacherAssignment] = useState({});

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position, teacher) => {
    setTeacher(teacher);
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDrop = (e, key) => {
    const teacher_assignment = teacherAssignment;
    teacherAssignment[key] = teacher;
    setTeacherAssignment({ ...teacherAssignment, teacherAssignment: teacher_assignment });
  }

  const allowDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log('xxx xx xx ', event.target.id);
  }

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
                      <td onDragOver={allowDrop} onDrop={e => handleDrop(e, key)} key={key} id={key} className='dropzone F-style' >
                        {teacherAssignment[key]}
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
          return (
            <div key={teacher} className='dropzone each-faculty-box' draggable={true} onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index, teacher)}>
              <h3>{teacher}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DragnDrop;
