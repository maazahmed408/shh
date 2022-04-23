import React, { useState } from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUser, faUserDoctor, faHospitalUser, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'



const Running_booking = () => {
    return (
        <>
            <div className="Bedbilling">
                <section className="content home">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="row d-flex">
                            <div className="col-sm-6" style={{paddingTop:'10px'}}><h6>Bed Booking Overview</h6></div>
                            <div className="col-sm-6 text align-right"><button type="button" style={{background:'#056078', color:'white', borderRadius:'5px', marginLeft:'20px',width:'100px'}}>SAVE</button></div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6" style={{paddingTop:'20px'}}>
                                <div className="info-box-4 hover-zoom-effect">
                                    <div className="col-lg-12 d-flex content" style={{ color: 'white' }}>
                                        <div className="col-lg-6" style={{ paddingTop: '0px' }} >
                                            <div className="text" style={{ color: 'white', fontSize: '25px', paddingTop: '8px' }}>Beds </div>
                                            <div className="text" style={{ color: 'white', fontSize: '25px' }}>Booked</div>

                                        </div>
                                        <div className="col-lg-6" style={{ paddingTop: '5px' }}>
                                            <div className=' text align-right' style={{ color: 'white', fontSize: '25px' }}><FontAwesomeIcon icon={faBed} style={{}} /></div>
                                            <div className="number text align-right d-flex " style={{ justifyContent: 'center' }}>
                                                <h1 className='mb-2' style={{ fontSize: '20px', color: 'white', marginLeft: '35px' }}>
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
                            <div className="col-lg-4 col-md-4 col-sm-6" style={{paddingTop:'20px'}}>
                                <div className="info-box-5 hover-zoom-effect">
                                    <div className="col-lg-12  d-flex content" style={{ color: 'white' }}>
                                        <div className="col-lg-6" style={{ paddingTop: '10px', fontSize: '25px' }}>
                                            <div className="text" styel={{ color: 'white', fontSize: '25px' }}>Admitted </div>
                                            <div className="text" style={{ fontSize: '25px' }}>Patient</div>

                                        </div>
                                        <div className="col-lg-6" style={{ paddingTop: '10px', fontSize: '23px' }}>
                                            <div className="text align-right" style={{ color: 'white' }} ><FontAwesomeIcon color='bluelight' icon={faUserDoctor} style={{ margin: "10px" }} /></div>
                                            <div className="numbertext align-right ">
                                                <h1 className='mb-0' style={{ fontSize: '20px', color: 'white', marginRight: '10px' }}>
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

                            <div className="col-lg-4 col-md-4 col-sm-6" style={{paddingTop:'20px'}}>
                                <div className=" d-flex info-box-6 hover-zoom-effect">
                                    <div className="col-lg-12 d-flex  text align-left content">
                                        <div className="col-lg-6" style={{ paddingTop: '0px', fontSize: '25px' }}>
                                            <div className="text" style={{ color: 'white' }}>Total </div>
                                            <div className="text" style={{ color: 'white', fontSize: '23px' }}>Beds Available</div>
                                        </div>
                                        <div className="col-lg-6" style={{ paddingTop: '15px', fontSize: '23px' }}>
                                            <div className="text align-right" style={{ color: 'white' }} ><FontAwesomeIcon color='bluelight' size='40' icon={faBed} style={{ margin: "10px" }} /></div>
                                            <div className="number text align-right" >
                                                <h1 className='mb-0' style={{ fontSize: '20px', color: 'white', marginRight: '15px' }}>
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
                    <div class="row clearfix" style={{marginLeft:'10px'}}>
                        <h6>Patient Details</h6>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Admitted days</th>
                                    <th scope="col">Admitted date</th>
                                    <th scope="col">Discharge Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <th scope="row">1</th>
                                    <td>Dewesh</td>
                                    <td>4</td>
                                    <td>20/2/2022</td>
                                    <td>24/2/2022 </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Raju</td>
                                    <td>2</td>
                                    <td>12/2/2022</td>
                                    <td>14/2/2022 </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Ashish</td>
                                    <td>6</td>
                                    <td>4/2/2022</td>
                                    <td>10/6/2022 </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Alock</td>
                                    <td>8</td>
                                    <td>7/3/2022</td>
                                    <td>15/3/2022 </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Mohan</td>
                                    <td>10</td>
                                    <td>4/3/2022</td>
                                    <td>14/3/2022 </td>
                                </tr>


                            </tbody>
                        </table>




                    </div>
                    {/*<div className="text align-center"><button type="button" style={{background:'#056078', color:'white', borderRadius:'5px'}}>Save</button></div>*/}




                </section>

            </div>
        </>
    );
};
export default Running_booking;