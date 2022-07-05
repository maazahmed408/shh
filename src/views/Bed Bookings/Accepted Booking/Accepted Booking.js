import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from 'src/views/config.js/baseUrl';
import ReadOnlyRow1 from 'src/views/Bed Bookings/Accepted Booking/ReadOnlyRow1';
import EditableRow1 from 'src/views/Bed Bookings/Accepted Booking/EditableRow1';
import axios from 'axios';

const Accepted_booking = () => {
  const [valueData, setvalueData] = useState([]);
  const resultDAta = async () => {
    const result = await axios.get(
      baseUrl + '/admin/getAcceptedBookingRequests',
      {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      },
    );
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, []);

  console.log(valueData);

  const [contacts, setContacts] = useState(valueData);

  const [editFormData, setEditFormData] = useState({
    patientName: ' ',
    phone: ' ',
  });
  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      patientName: editFormData.patientName,
      phone: editFormData.phone,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  return (
    <>
      <div className="Bedbilling">
        <section className="content home">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="row d-flex">
                <div className="col-sm-6" style={{ paddingTop: '10px' }}>
                  <h6>Accepted Overview</h6>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-6"
                style={{ paddingTop: '20px' }}
              >
                <div className="info-box-4 hover-zoom-effect">
                  <div
                    className="col-lg-12 d-flex content"
                    style={{ color: 'white' }}
                  >
                    <div className="col-lg-6" style={{ paddingTop: '0px' }}>
                      <div
                        className="text"
                        style={{
                          color: 'white',
                          fontSize: '25px',
                          paddingTop: '8px',
                        }}
                      >
                        Beds{' '}
                      </div>
                      <div
                        className="text"
                        style={{ color: 'white', fontSize: '25px' }}
                      >
                        Booked
                      </div>
                    </div>
                    <div className="col-lg-6" style={{ paddingTop: '5px' }}>
                      <div
                        className=" text align-right"
                        style={{ color: 'white', fontSize: '25px' }}
                      >
                        <FontAwesomeIcon icon={faBed} style={{}} />
                      </div>
                      <div
                        className="number text align-right d-flex "
                        style={{ justifyContent: 'center' }}
                      >
                        <h1
                          className="mb-2"
                          style={{
                            fontSize: '20px',
                            color: 'white',
                            marginLeft: '35px',
                          }}
                        >
                          <CountUp start={10} end={100} duration={5}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-6"
                style={{ paddingTop: '20px' }}
              >
                <div className="info-box-5 hover-zoom-effect">
                  <div
                    className="col-lg-12  d-flex content"
                    style={{ color: 'white' }}
                  >
                    <div
                      className="col-lg-6"
                      style={{ paddingTop: '10px', fontSize: '25px' }}
                    >
                      <div
                        className="text"
                        styel={{ color: 'white', fontSize: '25px' }}
                      >
                        Admitted{' '}
                      </div>
                      <div className="text" style={{ fontSize: '25px' }}>
                        Patient
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      style={{ paddingTop: '10px', fontSize: '23px' }}
                    >
                      <div
                        className="text align-right"
                        style={{ color: 'white' }}
                      >
                        <FontAwesomeIcon
                          color="bluelight"
                          icon={faUserDoctor}
                          style={{ margin: '10px' }}
                        />
                      </div>
                      <div className="numbertext align-right ">
                        <h1
                          className="mb-0"
                          style={{
                            fontSize: '20px',
                            color: 'white',
                            marginRight: '10px',
                          }}
                        >
                          <CountUp start={4} end={70} duration={3}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-4 col-sm-6"
                style={{ paddingTop: '20px' }}
              >
                <div className=" d-flex info-box-6 hover-zoom-effect">
                  <div className="col-lg-12 d-flex  text align-left content">
                    <div
                      className="col-lg-6"
                      style={{ paddingTop: '0px', fontSize: '25px' }}
                    >
                      <div className="text" style={{ color: 'white' }}>
                        Total{' '}
                      </div>
                      <div
                        className="text"
                        style={{ color: 'white', fontSize: '23px' }}
                      >
                        Beds Available
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      style={{ paddingTop: '15px', fontSize: '23px' }}
                    >
                      <div
                        className="text align-right"
                        style={{ color: 'white' }}
                      >
                        <FontAwesomeIcon
                          color="bluelight"
                          size="40"
                          icon={faBed}
                          style={{ margin: '10px' }}
                        />
                      </div>
                      <div className="number text align-right">
                        <h1
                          className="mb-0"
                          style={{
                            fontSize: '20px',
                            color: 'white',
                            marginRight: '15px',
                          }}
                        >
                          <CountUp start={5} end={60} duration={3}>
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                              </VisibilitySensor>
                            )}
                          </CountUp>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <section className="content">
              <div className="container-fluid">
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <div className="card">
                      <div className="header">
                        <h2>Accepted Bookings</h2>
                      </div>
                      <div class="body table-responsive">
                        <form onSubmit={handleEditFormSubmit}>
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
                              {valueData.length !== 0 &&
                                valueData.map((value) => (
                                  <Fragment>
                                    {editContactId === value.uid ? (
                                      <EditableRow1
                                        editFormData={editFormData}
                                      />
                                    ) : (
                                      <ReadOnlyRow1 contact={value} />
                                    )}
                                  </Fragment>
                                ))}
                            </tbody>
                          </table>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};
export default Accepted_booking;
