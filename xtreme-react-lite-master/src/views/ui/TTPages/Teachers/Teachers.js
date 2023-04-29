import React, { useState } from 'react'
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
  
  const Teachers = () => {
    const[addTeacher,setAddTeacher]=useState(null)

const onChangeName=(e,key)=>{
    key=e.target.name;
    setAddTeacher(e.target.value);
    console.log("teacher is added")
}
const onAddTeacher=()=>{
alert("the teacher will added as per api call")
}


    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              {/* <i className="bi bi-bell me-2"> </i> */}
              Add Teacher
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="teachersname">Teacher's Name</Label>
                  <Input
                    id="teachersname"
                    name="teachername"
                    placeholder="write teacher's name"
                    type="text"
                    
                    onChange={onChangeName}
                    
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="bgcolor">Background Color</Label>
                  <Input
                    id="bgcolor"
                    name="color"
                    placeholder="add color"
                    type="color"
                  />
                </FormGroup>
                {/* <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti">Select Multiple</Label>
                  <Input
                    id="exampleSelectMulti"
                    multiple
                    name="selectMulti"
                    type="select"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Text Area</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input id="exampleFile" name="file" type="file" />
                  <FormText>
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                  <legend>Radio Buttons</legend>
                  <FormGroup check>
                    <Input name="radio1" type="radio" />{" "}
                    <Label check>
                      Option one is this and that—be sure to include why it's
                      great
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input name="radio1" type="radio" />{" "}
                    <Label check>
                      Option two can be something else and selecting it will
                      deselect option one
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Input disabled name="radio1" type="radio" />{" "}
                    <Label check>Option three is disabled</Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" /> <Label check>Check me out</Label>
                </FormGroup> */}
                <Button onClick={onAddTeacher}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Teachers;
  
