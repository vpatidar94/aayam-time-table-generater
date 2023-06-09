import React, { useState, useEffect } from 'react';
import { batch } from '../List/List';
import { teachers_list } from '../List/List';
// import { teachers_list } from '../../../const/teacherList';
// import { batch } from '../../../const/batchList';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledAlert } from 'reactstrap';
import "./TeacherForm.css";

const AddTeacher = ({ showModal, setShowModal, teacherList }) => {

  /************************************Use Effect****************************************** */
  useEffect(() => {
    if (showModal) {
      const fetchApiData = async () => {
        try {
          const response = await fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");
          const result = await response.json();
          setApiData(result);
        } catch (error) {
        }
      };

      fetchApiData();
    }
  }, [showModal]);

  /***********************Use State***************************************************** */
  const [faculties, setFaculties] = useState(teacherList);
  // const [batches, setBatches] = useState(JSON.parse(localStorage.getItem('batches')) || batch);
  const [apiData, setApiData] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [showAlert, setShowAlert] = useState("");
  const [timeOfAlert, setTimeOfAlert] = useState(false);

  /*************************other consts*************************************************** */
  const { Object: responseObject = {} } = apiData;
  const { Batch = [], FacultyList = [], UserList = [] } = responseObject;
  const facultyNameMap = {};

  UserList.forEach((user) => {
    facultyNameMap[user.UserID] = user.UserName;
  });
  /****************************************methods******************************************* */
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const updatedFacultyList = FacultyList.map((faculty) => ({
    ...faculty,
    Faculty: facultyNameMap[faculty.FacultyID] || faculty.Faculty,
  }));

  const addToFaculty = () => {
    const newTeachersList = teacherList;

    for (const facultyID in checkedItems) {
      if (checkedItems[facultyID]) {
        const selectedItem = updatedFacultyList.find(
          (faculty) => faculty.FacultyID === parseInt(facultyID)
        );

        if (selectedItem) {
          const facultyUser = UserList.find(
            (user) => user.UserID === selectedItem.FacultyID
          );
          const facultyName = facultyUser ? facultyUser.UserName : selectedItem.Faculty;

          const isTeacherAlreadyAdded = newTeachersList.some(
            (teacher) => teacher.FacultyID === selectedItem.FacultyID
          );

          if (!isTeacherAlreadyAdded) {
            newTeachersList.push({
              FacultyID: selectedItem.FacultyID,
              Faculty: facultyName,
            });
          }
        }
      }
    }
    setFaculties(newTeachersList);
    if (!timeOfAlert) {
      setShowAlert(<UncontrolledAlert color="success" fade={false}>
        Teachers added successfully
      </UncontrolledAlert>);
      setTimeout(() => {
        setTimeOfAlert(false);
        setShowAlert("");
      }, 3000);
    };
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  /**********************************************Template to return******************************** */
  return (
    <div>
      <Modal isOpen={showModal} toggle={closeModal} centered={true}>
        <ModalHeader toggle={closeModal}>Select Teachers from the list</ModalHeader>
        <ModalBody>
          {showAlert}
          <div className="batch-list-container" style={{ maxHeight: '300px', overflowY: 'scroll', maxWidth: '300px' }}>
            <ul className="batch-list" style={{ listStyle: 'none' }}>
              {updatedFacultyList.map((faculty) => {
                const { FacultyID, bgColor, className } = faculty;
                const facultyUser = UserList.find((user) => user.UserID === FacultyID);
                const facultyName = facultyUser ? facultyUser.UserName : faculty.Faculty;
                return (
                  <li key={faculty.FacultyID}>
                    <div className="add-faculty-style">
                      <input
                        type="checkbox"
                        name={faculty.FacultyID}
                        checked={checkedItems[faculty.FacultyID] || false}
                        onChange={handleCheckboxChange}
                        className="addfaculty-checkbox-style"
                      />
                      {facultyName}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addToFaculty}>Add</Button>{' '}
          <Button color="secondary" onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default AddTeacher;






