
import React, { useState, useEffect } from 'react';
import { batch } from '../List/List';
// import { batch } from '../../../const/batchList';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./AddBatch.css"

const AddBatch = ({ showModal, setShowModal, batchList }) => {
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
  const [batches, setBatches] = useState(batchList);
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
    const newBatches = batchList;
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
      <Modal isOpen={showModal} toggle={closeModal} style={{ maxWidth: '320px' }}>
        <ModalHeader toggle={closeModal}>Select Batches from the list</ModalHeader>
        <ModalBody>
          <div className="batch-list-container" style={{ maxHeight: '300px', overflowY: 'scroll', maxWidth: '300px' }}>
            <ul className="batch-list" style={{ listStyle: 'none' }}>
              {Batch.map((batch) => (
                <li key={batch.BatchID}>
                  <div className="add-batch-style">
                    <input
                      type="checkbox"
                      name={batch.BatchID}
                      checked={checkedItems[batch.BatchID] || false}
                      onChange={handleCheckboxChange}
                      className="addbatch-checkbox-style"
                    />
                    {batch.Batch}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addToBatch}>Add</Button>{' '}
          <Button color="secondary" onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default AddBatch;

