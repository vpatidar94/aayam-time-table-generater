import React, { useState } from 'react';


const StudentForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };


  const onSubmit=()=>{
    alert("The Student data will be submitted as per api call")
  }

  return (
    <>
      <button onClick={openForm}>+</button>

      {isOpen && (
        <div className="form-popup">
          <form className="form-container">
            <h1>Add Student</h1>

            <label htmlFor="name">
              <b>Student Name</b>
            </label>
            <input type="text" placeholder="Enter Name" name="name" required />

            <label htmlFor="batchname">
              <b>Student's Batch</b>
            </label>
            <input
              type="text"
              placeholder="Enter Batch Name"
              name="batchname"
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

            <button type="submit" className="submit-btn" onClick={onSubmit}>
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

export default StudentForm;