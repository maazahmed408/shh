import React, { useState } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';

const Hospital_add = () => {
  const [hospitalName, sethospitalname] = useState('');
  const [hospitalLocation, sethospitallocation] = useState('');
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [alldoctors, setalldoctor] = useState('');
  const [allbeds, settotalbeds] = useState('');
  const [ambulances, setambulence] = useState('');

  async function handleFormSubmit(e) {
    e.preventDefault();
    let item = {
      hospitalName,
      hospitalLocation,
      latitude,
      longitude,
      alldoctors,
      allbeds,
      ambulances,
    };
    let result = await axios.post(baseUrl + '/addHospital', item, {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    console.log(result);
  }
  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>Hospital Add </h2>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <lable>Hospital Name</lable>
                            <div className="form-line1">
                              <input
                                name="Userid"
                                value={hospitalName}
                                required="required"
                                onChange={(e) => {
                                  sethospitalname(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <lable>Location</lable>
                            <div className="form-line1">
                              <input
                                name="Location"
                                required="required"
                                value={hospitalLocation}
                                onChange={(e) => {
                                  sethospitallocation(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <lable>Latitude</lable>
                            <div className="form-line1">
                              <input
                                name="Location"
                                required="required"
                                value={latitude}
                                onChange={(e) => {
                                  setlatitude(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <lable>Longitude</lable>
                            <div className="form-line1">
                              <input
                                name="Location"
                                required="required"
                                value={longitude}
                                onChange={(e) => {
                                  setlongitude(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <lable> All Doctor</lable>
                            <div className="form-line1">
                              <input
                                name="alldocotr"
                                required="required"
                                value={alldoctors}
                                onChange={(e) => {
                                  setalldoctor(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <lable>Total Beds</lable>
                            <div className="form-line1">
                              <input
                                name="totalbeds"
                                required="required"
                                value={allbeds}
                                onChange={(e) => {
                                  settotalbeds(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <lable>Ambulence</lable>
                            <div className="form-line1">
                              <input
                                name="password"
                                required="required"
                                value={ambulances}
                                onChange={(e) => {
                                  setambulence(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text align-right">
                        <button
                          className=""
                          style={{
                            border: '1px solid',
                            background: '#056078',
                            color: 'white',
                            width: 'rem',
                            height: '2.5rem',
                            borderRadius: '5px',
                          }}
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Hospital_add;
