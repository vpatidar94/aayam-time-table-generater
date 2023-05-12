// // import React, { useState } from 'react'
// // import {
// //     Card,
// //     Row,
// //     Col,
// //     CardTitle,
// //     CardBody,
// //     Button,
// //     Form,
// //     FormGroup,
// //     Label,
// //     Input,
// //     FormText,
// //   } from "reactstrap";
  
// //   const AddBatch = () => {
// //     const[addBatch,setAddBatch]=useState(null)

// // const onChangeBatch=(e,key)=>{
// //     key=e.target.name;
// //     setAddBatch(e.target.value);
// //     console.log("teacher is added")
// // }
// // const onAddBatch=()=>{
// // alert("the batch will be added as per api call")
// // }


// //     return (
// //       <Row>
// //         <Col>
// //           {/* --------------------------------------------------------------------------------*/}
// //           {/* Card-1*/}
// //           {/* --------------------------------------------------------------------------------*/}
// //           <Card>
// //             <CardTitle tag="h6" className="border-bottom p-3 mb-0">
// //               {/* <i className="bi bi-bell me-2"> </i> */}
// //               Add Batch
// //             </CardTitle>
// //             <CardBody>
// //               <Form>
// //                 <FormGroup>
// //                   <Label for="batchname">Batch Name</Label>
// //                   <Input
// //                     id="batchname"
// //                     name="batchname"
// //                     placeholder="Write Batch Name"
// //                     type="text"
                    
// //                     onChange={onChangeBatch}
                    
// //                   />
// //                 </FormGroup>
// //                 {/* <FormGroup>
// //                   <Label for="bgcolor">Background Color</Label>
// //                   <Input
// //                     id="bgcolor"
// //                     name="color"
// //                     placeholder="add color"
// //                     type="color"
// //                   />
// //                 </FormGroup> */}
// //                 {/* <FormGroup>
// //                   <Label for="exampleSelect">Select</Label>
// //                   <Input id="exampleSelect" name="select" type="select">
// //                     <option>1</option>
// //                     <option>2</option>
// //                     <option>3</option>
// //                     <option>4</option>
// //                     <option>5</option>
// //                   </Input>
// //                 </FormGroup>
// //                 <FormGroup>
// //                   <Label for="exampleSelectMulti">Select Multiple</Label>
// //                   <Input
// //                     id="exampleSelectMulti"
// //                     multiple
// //                     name="selectMulti"
// //                     type="select"
// //                   >
// //                     <option>1</option>
// //                     <option>2</option>
// //                     <option>3</option>
// //                     <option>4</option>
// //                     <option>5</option>
// //                   </Input>
// //                 </FormGroup>
// //                 <FormGroup>
// //                   <Label for="exampleText">Text Area</Label>
// //                   <Input id="exampleText" name="text" type="textarea" />
// //                 </FormGroup>
// //                 <FormGroup>
// //                   <Label for="exampleFile">File</Label>
// //                   <Input id="exampleFile" name="file" type="file" />
// //                   <FormText>
// //                     This is some placeholder block-level help text for the above
// //                     input. It's a bit lighter and easily wraps to a new line.
// //                   </FormText>
// //                 </FormGroup>
// //                 <FormGroup tag="fieldset">
// //                   <legend>Radio Buttons</legend>
// //                   <FormGroup check>
// //                     <Input name="radio1" type="radio" />{" "}
// //                     <Label check>
// //                       Option one is this and that—be sure to include why it's
// //                       great
// //                     </Label>
// //                   </FormGroup>
// //                   <FormGroup check>
// //                     <Input name="radio1" type="radio" />{" "}
// //                     <Label check>
// //                       Option two can be something else and selecting it will
// //                       deselect option one
// //                     </Label>
// //                   </FormGroup>
// //                   <FormGroup check disabled>
// //                     <Input disabled name="radio1" type="radio" />{" "}
// //                     <Label check>Option three is disabled</Label>
// //                   </FormGroup>
// //                 </FormGroup>
// //                 <FormGroup check>
// //                   <Input type="checkbox" /> <Label check>Check me out</Label>
// //                 </FormGroup> */}
// //                 <Button onClick={onAddBatch}>Submit</Button>
// //               </Form>
// //             </CardBody>
// //           </Card>
// //         </Col>
// //       </Row>
// //     );
// //   };
  
// //   export default AddBatch;
  
// import React, { useState } from 'react';
// // import { batch } from '../List/List';
// import { batch as initialBatch } from '../List/List';

// // export const batch = [
// //   // ... (the initial array content)
// // ];

// const AddBatch = () => {
//   const [batches, setBatches] = useState();
//   const [apiData, setApiData] = useState({});
//   const [newBatch, setNewBatch] = useState({
//     BatchID: '',
//     Batch: '',
//     CourseID: '',
//   });


//   const [checkedItems, setCheckedItems] = useState({});

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({
//       ...checkedItems,
//       [name]: checked,
//     });
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewBatch({
//       ...newBatch,
//       [name]: value,
//     });
//   };

//   const handleClick = () => {
//     setBatches([...batches, newBatch]);
//     setNewBatch({
//       BatchID: '',
//       Batch: '',
//       CourseID: '',
//     });
//   };


//   const addToBatch = () => {
//     const newBatches = [...initialBatch];
//     for (const batchID in checkedItems) {
//       if (checkedItems[batchID]) {
//         const selectedItem = Batch.find((batch) => batch.BatchID === parseInt(batchID));
//         if (selectedItem && !newBatches.find((batch) => batch.BatchID === selectedItem.BatchID)) {
//           newBatches.push(selectedItem);
//         }
//       }
//     }
//     setBatches(newBatches);
//   };

// const callIT=()=>{
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData", requestOptions)
//   .then(response => response.json())
//   .then(result => setApiData(result))
//   .catch(error => console.log('error', error));
    
//   }


//   const { Object: responseObject = {} } = apiData;
//   const { Batch = [],FacultyList=[] } = responseObject;



//   return (
//     <div>
//       <h1>Add New Batch</h1>
//       <form>
//         <button onClick={callIT}>call it</button>
//         {/* <select>        {Batch.map((batch) => {
//         return(
          
//           <option className='F-style batch-style' key={batch.BatchID}>{batch.Batch}</option>
        
//         )})}
//         </select> */}
//         <h2>Batch List with Checkboxes</h2>
//       <ul style={{listStyle:'none'}}>
//         {Batch.map((batch) => (
//           <li key={batch.BatchID}>
//             <label>
//               <input
//                 type="checkbox"
//                 name={batch.BatchID}
//                 checked={checkedItems[batch.BatchID] || false}
//                 onChange={handleCheckboxChange}
//               />
//               {batch.Batch}
//             </label>
//           </li>
//         ))}
//       </ul>
//       <button onClick={addToBatch}>Add selected items to batch</button>
//       {/* <select>
//         <option>A1</option>
//         <option>A2</option>
//         <option>A3</option>
//       </select> */}
//         {/* <label>
//           BatchID:
//           <input
//             type="number"
//             name="BatchID"
//             value={newBatch.BatchID}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Batch:
//           <input
//             type="text"
//             name="Batch"
//             value={newBatch.Batch}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           CourseID:
//           <input
//             type="number"
//             name="CourseID"
//             value={newBatch.CourseID}
//             onChange={handleChange}
//           />
//         </label> */}
//       </form>
//       {/* <button onClick={handleClick}>Add Batch</button>
//       <h2>Batch List</h2> */}
//       {/* <ul>
//         {batches.map((batch) => (
//           <li key={batch.BatchID}>
//             {batch.BatchID} - {batch.Batch} - {batch.CourseID}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default AddBatch;


import React, { useState } from 'react';
// import { batch as initialBatch } from '../List/List';
import { batch } from '../List/List';


const AddBatch = () => {
  console.log(",,bb" ,batch);
  const [batches, setBatches] = useState(batch);
  // const [batches, setBatches] = useState(JSON.parse(localStorage.getItem('batches')) || batch);
  const [apiData, setApiData] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const callIT = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData", requestOptions)
      .then(response => response.json())
      .then(result => setApiData(result))
      .catch(error => console.log('error', error));
  }

  const { Object: responseObject = {} } = apiData;
  const { Batch = [] } = responseObject;

  const addToBatch = () => {
    const newBatches = batch;
    for (const batchID in checkedItems) {
      if (checkedItems[batchID]) {
        const selectedItem = Batch.find((batch) => batch.BatchID === parseInt(batchID));
        if (selectedItem && !newBatches.find((batch) => batch.BatchID === selectedItem.BatchID)) {
          newBatches.push({
            BatchID: selectedItem.BatchID,
            Batch: selectedItem.Batch,
            CourseID: selectedItem.CourseID,
          });
        }
      }
    }
    console.log(newBatches)
    setBatches(newBatches);
//     setBatches(newBatches);
// localStorage.setItem('batches', JSON.stringify(newBatches));
    // batch.push(...newBatches);
  };


  

  return (
    
    <div>
    
    
      <h1>Add New Batch</h1>
      <button onClick={callIT}>call it</button>
      <h2>Batch List with Checkboxes</h2>
      <ul style={{ listStyle: 'none' }}>
        {Batch.map((batch) => (
          <li key={batch.BatchID}>
            <label>
              <input
                type="checkbox"
                name={batch.BatchID}
                checked={checkedItems[batch.BatchID] || false}
                onChange={handleCheckboxChange}
              />
              {batch.Batch}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={addToBatch}>Add selected items to batch</button>
      <h2>Updated Batch List</h2>
      <ul>
        {batches.map((batch) => (
          <li key={batch.BatchID}>
            {batch.BatchID} - {batch.Batch} - {batch.CourseID}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddBatch;

