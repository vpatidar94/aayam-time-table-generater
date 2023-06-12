import React, { useEffect, useState } from 'react'
import TtApi from '../../../api/tt.api.js';
import { Button, Card, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { RiDeleteBin2Line } from "react-icons/ri";

const PreviousTimeTable = () => {
  /**************************************** const Section ************************************/
  /**************************************** Use Effect Section ************************************/
  useEffect(() => {
    getTimeTableList();
  }, []);

  /**************************************** State Section *****************************************/
  const [timeTableList, setTimeTableList] = useState([]);

  /**************************************** Component Method Section *********************************/
  const getTimeTableList = async () => {
    const result = await new TtApi().getTtList();
    if (result.IsSuccessful && result.Object?.length > 0) {
      setTimeTableList(result.Object);
      console.log(result.Object)
    }
  };

  const editTt = (row) => {
    console.log('xxx xx xx row is ', row);
  }

  const DeleteTt = async (row) => {
    await new TtApi().removeTtById(row.TimeTableID);
  }

  /**************************************** Template Section *****************************************/
  return (
    <>
      <div className='col-12'>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Previous Time Table</CardTitle>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Table Id</th>
                  <th>Session</th>
                  <th>FromDate</th>
                  <th>To Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {timeTableList.reverse().map((tdata, index) => (
                  <tr key={tdata.TimeTableID} className="border-top">
                    <td>
                      {tdata.TimeTableID}
                    </td>
                    <td>{tdata.Session}</td>
                    <td>
                      {tdata.FromDate}
                    </td>
                    <td>{tdata.ToDate}</td>
                    <td>
                      <NavLink to={'/clone/' + tdata.TimeTableID + '/' + tdata.FromDate.replaceAll("/", '-')}><Button onClick={e => { editTt(tdata) }} className="btn" outline color="primary">
                        Clone
                      </Button></NavLink>
                      <Button className="btn" color="transparent" onClick={e => { DeleteTt(tdata) }}>
                        <RiDeleteBin2Line style={{ color: "red" }} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default PreviousTimeTable
