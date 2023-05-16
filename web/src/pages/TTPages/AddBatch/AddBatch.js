
import React, { useState, useEffect } from 'react';
import { batch } from '../List/List';
// import { batch } from '../../../const/batchList';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddBatch = ({ showModal, setShowModal }) => {
  console.log(",,bb", batch);
  /******************************************Use Effect********************************************** */
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
  /********************************************Use State****************************************** */
  const [batches, setBatches] = useState(batch);
  // const [batches, setBatches] = useState(JSON.parse(localStorage.getItem('batches')) || batch);
  const [apiData, setApiData] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  /*****************************Other consts******************************************************** */
  const { Object: responseObject = {} } = apiData;
  const { Batch = [] } = responseObject;

  /***************************************Methods*************************************************** */
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

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
    alert("batches added successfully");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  /***************************Template to return******************************************************* */
  return (
    <div>
      <h1>Add New Batch</h1>
      <Modal isOpen={showModal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Batch List with Checkboxes</ModalHeader>
        <ModalBody>
          <div className="batch-list-container" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
            <ul className="batch-list" style={{ listStyle: 'none' }}>
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
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addToBatch}>Add selected items to batch</Button>{' '}
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
export default AddBatch;

