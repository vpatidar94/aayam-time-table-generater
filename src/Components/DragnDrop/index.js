import React, { useRef,useState } from 'react'
import { batch, teachers_list } from '../List';
import { time } from '../List';
import "./index.css";


const teacher_assignment = {};

const DragnDrop = () => {
    const[teacher,setTeacher]=useState("");

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
      };
     
      const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
      };
     
      const drop = (e) => {
        const copyListItems = teachers_list;
        const dragItemContent = copyListItems[dragItem.current];
        // copyListItems.splice(dragItem.current, 1);
        // copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        // setList(copyListItems);
      };



  return (
    <>
      
      <table className='table-style'>
      <tbody>
      <div className="for-time">
      <tr>
      <td className='F-style'>Time</td>
        
            
            {batch.map((each)=>{
                return(
               <td className='F-style'>{each.batchname}</td> 
                )
            })}
            
        </tr>
    </div>
        
        

        
        
    
        <tr >
            {time.map((t) => {
                return(
                    
                    <div >
                    <td className='F-style'>{t.classtime}</td>
                    
                    {batch.map((b) => {
            
            const key = t.id + '_' + b.id
            teacher_assignment[key] = null
           return(
                
               <td className='F-style' >{teacher}</td>
               
               
           )
           })}
            </div>
            
               )})}
              
              

        </tr>
        </tbody>
      </table>

      <div className="teacher-style">
        {teachers_list.map((eachteacher,index)=>{
            return(
                <div className='each-faculty-box' draggable onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}>
                <h3>{eachteacher}</h3>
                </div>
            )
        })}
      </div>
    </>
  )
}

export default DragnDrop;
