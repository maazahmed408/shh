import baseUrl from 'src/views/config.js/baseUrl';
import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';

const Bed_billing = () => {
  const [resData, setResData] = useState([]);

  const completedBookingService = async () => {
    const result = await axios.get(
      'https://ehospi-app.herokuapp.com' + '/admin/getCompletedBooking',
      {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      },
    );
    if (Array.isArray(result.data)) {
      setResData(result.data);
      console.log(result.data);
    } else {
      console.log(result.data);
    }
  };

  useEffect(() => {
    completedBookingService();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="Bedbilling">
          <div className="row d-flex">
            <div className="col-sm-10">
              <h6>Bed Billing</h6>
            </div>
          </div>
          <div class="body table-responsive">
            <form>
              <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                <thead>
                  <tr
                    className="tablepatient"
                    style={{
                      paddingTop: '30px',
                      marginLeft: '30px',
                      width: '5px',
                    }}
                  >
                    <th>Patient_Name</th>
                    <th>Family_Member</th>
                    <th>Date_Of_Birth</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Father/Husband_Name</th>
                    <th>Address</th>
                    <th>E-mail</th>
                    <th>Nationality</th>
                    <th>Religion</th>
                    <th>Occupation</th>
                    <th>Alternate_Phone</th>
                    <th>Booking_Status</th>
                  </tr>
                </thead>
                <tfoot></tfoot>
                <tbody style={{ width: '5px' }}>
                  {resData.length != 0 &&
                    resData.map((value) => (
                      <Fragment>
                        {editContactId === value.uid ? (
                          <EditableRow1 editFormData={editFormData} />
                        ) : (
                          <ReadOnlyRow1 contact={value} />
                        )}
                      </Fragment>
                    ))}
                </tbody>
              </table>
            </form>
          </div>
          {/* <div className=" texta align-center"><button style={{background:'#056078', color:'white', borderRadius:'5px'}} type="button">Save</button></div>*/}
        </div>
      </div>
    </>
  );
};
export default Bed_billing;
