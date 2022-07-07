import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { getHospitalDetailService } from '../../../Services/hospital';
import HospitalDetail from './HospitalDetail';

import axios from 'axios';

const Hospital_List = () => {
  const [valueData, setvalueData] = useState([]);
  const [hospitalDetails, setHospitalDetails] = useState({});

  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/getHospital', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, []);

  const [contacts, setContacts] = useState(valueData);
  const [editFormData, setEditFormData] = useState({
    hospitalName: ' ',
    hospitalLocation: ' ',
    latitude: ' ',
    longitude: ' ',
    alldoctors: ' ',
    allbeds: ' ',
    ambulances: ' ',
  });
  const [editContactId, setEditContactId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      hospitalName: editFormData.hospitalName,
      hospitalLocation: editFormData.hospitalLocation,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleHospitalVew = (hCode) => {
    setIsVisible(true);
    getHospitalDetailService(hCode).then((response) => {
      if (response.success === true) setHospitalDetails(response.data);
    });
  };

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>Hospitals List</h2>
                  </div>
                  <div className="body table-responsive">
                    <form onSubmit={handleEditFormSubmit}>
                      <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr
                            className="tablepatient"
                            style={{
                              paddingTop: '30px',
                              marginLeft: '30px',
                              width: '5px',
                            }}
                          >
                            <th>Hospital Name</th>
                            <th>Hospital Code</th>
                            <th>Hospital Type</th>
                            <th>Hospital Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone</th>
                            <th>Number of beds</th>
                            <th>View Detail</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !== 0 &&
                            valueData.map((value) => (
                              <tr key={value._id}>
                                <td>{value.hospitalName}</td>
                                <td>{value.hospitalCode}</td>
                                <td>{value.hospitalType}</td>
                                <td>{value.hospitalAddress}</td>
                                <td>{value.city}</td>
                                <td>{value.state}</td>
                                <td>{value.phone}</td>
                                <td>{value.numberOfBeds}</td>
                                <td
                                  style={{
                                    textAlign: 'center',
                                  }}
                                >
                                  <button
                                    onClick={() =>
                                      handleHospitalVew(value.hospitalCode)
                                    }
                                    className="btn btn-xm px-1 py-1 btn btn-xm"
                                    style={{ marginRight: '1.5rem' }}
                                  >
                                    <FontAwesomeIcon
                                      style={{ color: 'green' }}
                                      icon={faEye}
                                    />
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isVisible && (
            <HospitalDetail
              setIsVisible={setIsVisible}
              hospitalDetailsData={hospitalDetails}
            />
          )}
        </section>
      </div>
    </>
  );
};
export default Hospital_List;
