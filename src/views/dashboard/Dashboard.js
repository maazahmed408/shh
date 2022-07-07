import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import Modal from 'react-modal';
import Bedbookings from './Bedbookings';
import Patients from './Patients';
import Doctors from './Doctors';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getHospitalBedService,
  getHospitalCountService,
  getHospitalPatientService,
  getHospitalEarningService,
} from '../../Services/hospital';
import {
  faBed,
  faUserDoctor,
  faHospitalUser,
  faMoneyCheck,
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [bedData, setBedData] = useState(0);
  const [incomeData, setIncomeData] = useState(0);
  const [patientData, setPatientData] = useState(0);
  const [hospitalData, setHospitalData] = useState(0);

  useEffect(() => {
    getHospitalBedService().then((res) => {
      setBedData(res.data.result);
    });
    getHospitalCountService().then((res) => {
      setHospitalData(res.data.result);
    });
    getHospitalPatientService().then((res) => {
      setPatientData(res.data.result);
    });
    getHospitalEarningService().then((res) => {
      setIncomeData(res.data?.result[0]?.totalEarning);
    });
  }, []);

  const [Bedbooking, setBedbooking] = useState(false);
  const BedbookingBtn = (bool) => {
    setBedbooking(bool);
  };
  const [Patient, setPatient] = useState(false);
  const PatientBtn = (bool) => {
    setPatient(bool);
  };
  const [Doctor, setDoctor] = useState(false);
  const DoctorBtn = (bool) => {
    setDoctor(bool);
  };
  return (
    <>
      <div>
        <section className="content home">
          <div className="container-fluid">
            <div className="row clearfix">
              <div
                className="col-lg-3 col-md-3 col-sm-6"
                // onClick={() => setPatient(true)}
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
                        Total{' '}
                      </div>
                      <div
                        className="text"
                        style={{ color: 'white', fontSize: '25px' }}
                      >
                        {' '}
                        Patient
                      </div>
                      <div
                        className="row d-flex text align-center"
                        style={{ color: 'white', fontSize: '10px' }}
                      ></div>
                    </div>
                    <div className="col-lg-6" style={{ paddingTop: '5px' }}>
                      <div
                        className=" text align-right"
                        style={{ color: 'white', fontSize: '25px' }}
                      >
                        <FontAwesomeIcon icon={faHospitalUser} style={{}} />
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
                            marginLeft: '25px',
                          }}
                        >
                          <CountUp start={0} end={patientData} duration={2}>
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
                className="col-lg-3 col-md-3 col-sm-6"
                // onClick={() => setDoctor(true)}
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
                        Total{' '}
                      </div>
                      <div className="text" style={{ fontSize: '25px' }}>
                        Hospitals
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
                          <CountUp start={0} end={hospitalData} duration={2}>
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
                className="col-lg-3 col-md-3 col-sm-6"
                // onClick={() => setBedbooking(true)}
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
                        Hospital Beds
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
                          <CountUp start={0} end={bedData} duration={2}>
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

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="info-box-7 hover-zoom-effect">
                  <div
                    className=" col-lg-12 d-flex content"
                    style={{ color: 'white' }}
                  >
                    <div
                      className="col-lg-6"
                      style={{ paddingTop: '5px', fontSize: '25px' }}
                    >
                      <div className="m-t-6 " style={{}}>
                        {' '}
                        Total{' '}
                      </div>
                      <div className="text d-flex" style={{ fontSize: '23px' }}>
                        Hospital Earning
                        <h1
                          className="mb-1"
                          style={{ fontSize: '10px', color: 'white' }}
                        ></h1>
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      style={{ paddingTop: '15px', fontSize: '25px' }}
                    >
                      <div
                        className="text align-right"
                        style={{ color: 'white' }}
                      >
                        <FontAwesomeIcon
                          color="bluelight"
                          size="40"
                          icon={faMoneyCheck}
                          style={{ margin: '10px' }}
                        />
                      </div>
                      <div
                        className=" text align-right number"
                        style={{ fontSize: '20px', marginLeft: '10px' }}
                      >
                        ₹
                        <CountUp start={0} end={incomeData} duration={2}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>
        </section>
      </div>
      <Modal
        id="Bedbooking-modal"
        isOpen={Bedbooking}
        closeTimeoutMS={100}
        shouldCloseOnEsc={true}
        onRequestClose={() => setBedbooking(false)}
        style={{
          overlay: {
            zIndex: '1000',
          },
          content: {
            maxWidth: '600px',
            height: '37%',
            margin: 'auto',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <Bedbookings BedbookingBtn={BedbookingBtn} />
      </Modal>
      <Modal
        id="Patient-modal"
        isOpen={Patient}
        closeTimeoutMS={100}
        shouldCloseOnEsc={true}
        onRequestClose={() => setPatient(false)}
        style={{
          overlay: {
            zIndex: '1000',
          },
          content: {
            maxWidth: '600px',
            height: '37%',
            margin: 'auto',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <Patients PatientBtn={PatientBtn} />
      </Modal>
      <Modal
        id="Doctor-modal"
        isOpen={Doctor}
        closeTimeoutMS={100}
        shouldCloseOnEsc={true}
        onRequestClose={() => setDoctor(false)}
        style={{
          overlay: {
            zIndex: '1000',
          },
          content: {
            maxWidth: '600px',
            height: '37%',
            margin: 'auto',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <Doctors DoctorBtn={DoctorBtn} />
      </Modal>
    </>
  );
};
export default Dashboard;
