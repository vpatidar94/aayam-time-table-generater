import React, { useState } from 'react';
import { EmployeeList, employeeList } from '../List/EmployeeList';

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
  import ProjectTables from '../../../components/dashboard/ProjectTable';
import {  Table} from "reactstrap";
import StudentForm from '../StudentForm/StudentForm';


//     <Row>
//       {/* --------------------------------------------------------------------------------*/}
//       {/* table-1*/}
//       {/* --------------------------------------------------------------------------------*/}
//       <Col lg="12">
//         <ProjectTables />
//       </Col>
//       {/* --------------------------------------------------------------------------------*/}
//       {/* table-2*/}
//       {/* --------------------------------------------------------------------------------*/}
//       <Col lg="12">
//         <Card>
//           <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//             <i className="bi bi-card-text me-2"> </i>
//             Table with Border
//           </CardTitle>
//           <CardBody className="">
//             <Table bordered>
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Username</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">1</th>
//                   <td>Mark</td>
//                   <td>Otto</td>
//                   <td>@mdo</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">2</th>
//                   <td>Jacob</td>
//                   <td>Thornton</td>
//                   <td>@fat</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry</td>
//                   <td>the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//               </tbody>
//             </Table>
//           </CardBody>
//         </Card>
//       </Col>
//       {/* --------------------------------------------------------------------------------*/}
//       {/* table-3*/}
//       {/* --------------------------------------------------------------------------------*/}
//       <Col lg="12">
//         <Card>
//           <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//             <i className="bi bi-card-text me-2"> </i>
//             Table with Striped
//           </CardTitle>
//           <CardBody className="">
//             <Table bordered striped>
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Username</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">1</th>
//                   <td>Mark</td>
//                   <td>Otto</td>
//                   <td>@mdo</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">2</th>
//                   <td>Jacob</td>
//                   <td>Thornton</td>
//                   <td>@fat</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry</td>
//                   <td>the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//               </tbody>
//             </Table>
//           </CardBody>
//         </Card>
//       </Col>
//       {/* --------------------------------------------------------------------------------*/}
//       {/* table-3*/}
//       {/* --------------------------------------------------------------------------------*/}
//       <Col lg="12">
//         <Card>
//           <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//             <i className="bi bi-card-text me-2"> </i>
//             Table with Hover
//           </CardTitle>
//           <CardBody className="">
//             <Table bordered hover>
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Username</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">1</th>
//                   <td>Mark</td>
//                   <td>Otto</td>
//                   <td>@mdo</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">2</th>
//                   <td>Jacob</td>
//                   <td>Thornton</td>
//                   <td>@fat</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">3</th>
//                   <td>Larry</td>
//                   <td>the Bird</td>
//                   <td>@twitter</td>
//                 </tr>
//               </tbody>
//             </Table>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   );
// };



  
  const Students = () => {
    
    const[addTeacher,setAddTeacher]=useState(null);
    const onChangeName=(e,key)=>{
    key=e.target.name;
    setAddTeacher(e.target.value);
    console.log("teacher is added")
}
const onAddStudent=()=>{
alert("the student will added as per api call")
}
  
return (
      <>
      <div className="table-plus-button">
      <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Student List
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>S.NO.</th>
                  <th>Student Name</th>
                  <th>Batch Name</th>
                  <th>Mobile No.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>AAYAM1</td>
                  <td>9999999999</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>AAYAM2</td>
                  <td>8888888888</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>AAYAM3</td>
                  <td>7777777777</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    
    <header>
    <StudentForm/>
    </header>
  </div>
     

  

            </>
    );
  };
  
  export default Students;
  


  // <Button onClick={onAddTeacher}>Submit</Button>
  
