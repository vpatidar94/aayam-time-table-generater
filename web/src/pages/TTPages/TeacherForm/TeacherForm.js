import React, { useState, useEffect } from 'react';
import { batch } from '../List/List';
import { teachers_list } from '../List/List';
// import { teachers_list } from '../../../const/teacherList';
// import { batch } from '../../../const/batchList';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddTeacher = ({ showModal, setShowModal }) => {
  console.log(",,tt", teachers_list);

  /************************************Use Effect****************************************** */
  useEffect(() => {
    if (showModal) {
      const fetchApiData = async () => {
        try {
          const response = await fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");
          const result = await response.json();
          setApiData(result);
        } catch (error) {
          console.log('Error fetching API data:', error);
        }
      };

      fetchApiData();
    }
  }, [showModal]);

  /***********************Use State***************************************************** */
  const [faculties, setFaculties] = useState(batch);
  // const [batches, setBatches] = useState(JSON.parse(localStorage.getItem('batches')) || batch);
  const [apiData, setApiData] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

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
    const newTeachersList = teachers_list;

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

    console.log(newTeachersList);
    setFaculties(newTeachersList);
    alert("faculty added successfully");

  };

  const closeModal = () => {
    setShowModal(false);
  };

  /**********************************************Template to return******************************** */
  return (
    <div>
      <h1>Add New Teacher</h1>
      <Modal isOpen={showModal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Teacher List with Checkboxes</ModalHeader>
        <ModalBody>
          <div className="batch-list-container" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
            <ul className="batch-list" style={{ listStyle: 'none' }}>
              {updatedFacultyList.map((faculty) => {
                const { FacultyID, bgColor, className } = faculty;
                const facultyUser = UserList.find((user) => user.UserID === FacultyID);
                const facultyName = facultyUser ? facultyUser.UserName : faculty.Faculty;
                return (
                  <li key={faculty.FacultyID}>
                    <label>
                      <input
                        type="checkbox"
                        name={faculty.FacultyID}
                        checked={checkedItems[faculty.FacultyID] || false}
                        onChange={handleCheckboxChange}
                      />
                      {facultyName}
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addToFaculty}>Add selected items to teacher List</Button>{' '}
          <Button color="secondary" onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
      {/* <button onClick={addToBatch}>Add selected items to batch</button> */}
      {/* <h2>Updated Batch List</h2>
      <ul>
        {batches.map((batch) => (
          <li key={batch.BatchID}>
            {batch.BatchID} - {batch.Batch} - {batch.CourseID}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default AddTeacher;






