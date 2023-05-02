import React, { useState } from 'react';
import './TeacherForm.css';

const TeacherForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openForm}>+</button>

      {isOpen && (
        <div className="form-popup">
          <form className="form-container">
            <h1>Add Teacher</h1>

            <label htmlFor="name">
              <b>Teacher Name</b>
            </label>
            <input type="text" placeholder="Enter Name" name="name" required />

            <label htmlFor="employeeid">
              <b>Employee ID</b>
            </label>
            <input
              type="text"
              placeholder="Enter Employee ID"
              name="employeeid"
              required
            />

            <label htmlFor="mobilenumber">
              <b>Mobile No.</b>
            </label>
            <input
              placeholder="Enter 10 digit Mobile No."
              name="mobilenumber"
              required
            ></input>

            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="cancel-btn" onClick={closeForm}>
              Close
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default TeacherForm;