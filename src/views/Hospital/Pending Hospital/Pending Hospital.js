import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Pending_List = () => {
  const [valueData, setvalueData] = useState([]);
  const [result1, setresult1] = useState([]);
  const [r, setr] = useState(0);
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/signupPendingHospital', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setresult1(result.data);
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, [r]);
  const add = async (id) => {
    let result12 = await axios.post(
      baseUrl + '/addHospital',
      {
        hospitalName: id.hospitalName,
        hospitalCode: id.hospitalCode,
        hospitalAddress: id.hospitalAddress,
        hospitalType: id.hospitalType,
        city: id.city,
        state: id.state,
        phone: id.phone,
        numberOfBeds: id.numberOfBeds,
      },
      {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      },
    );
    if (result12) {
      toast.success('Hospital added to database successfully', {
        autoClose: 600,
      });
    }
  };
  const childaction = async (id) => {
    const Accept = async () => {
      const result = await axios.put(
        baseUrl + '/admin/accept/signupHospital',
        { hospitalCode: id.hospitalCode },
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem('token'),
          },
        },
      );
      if (result) {
        toast.success('Request accepted successfully', { autoClose: 600 });
        setr(r + 1);
        add(id);
      }
    };

    var answer = window.confirm(
      'Are you sure? You want to accept: ' + id.hospitalName,
    );
    console.log(answer);
    if (answer) {
      Accept();
    }
  };
  const childaction2 = async (id) => {
    const Reject = async () => {
      const result = await axios.put(
        baseUrl + '/admin/reject/signupHospital',
        { hospitalCode: id.hospitalCode },
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem('token'),
          },
        },
      );
      if (result) {
        setr(r + 1);
        toast.success('Request rejected successfully', { autoClose: 600 });
      }
    };
    var answer = window.confirm(
      'Are you sure? You want to reject: ' + id.hospitalCode,
    );
    if (answer) {
      Reject();
    }
  };

  const [contacts, setContacts] = useState(valueData);

  const [editFormData, setEditFormData] = useState({
    hospitalName: ' ',
    hospitalCode: ' ',
    hospitalType: ' ',
    hospitalAddress: ' ',
    city: ' ',
    state: ' ',
    phone: ' ',
  });
  const [editContactId, setEditContactId] = useState(null);

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

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>Pending Hospitals List</h2>
                  </div>
                  <div class="body table-responsive">
                    <form onSubmit={handleEditFormSubmit}>
                      <table class="table table-bordered table-striped table-hover js-basic-example dataTable1">
                        <tbody
                          style={{
                            paddingTop: '30px',
                            marginLeft: '30px',
                            width: '10px',
                          }}
                        >
                          <tr
                            style={{
                              paddingTop: '30px',
                              marginLeft: '30px',
                              width: '10px',
                            }}
                          >
                            <th>Hospital Name</th>
                            <th>Hospital Code</th>
                            <th>Hospital Type</th>
                            <th>Hospital Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                          {result1.length !== 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>{value.hospitalName}</td>
                                <td>{value.hospitalCode}</td>
                                <td>{value.hospitalType}</td>
                                <td>{value.hospitalAddress}</td>
                                <td>{value.city}</td>
                                <td>{value.state}</td>
                                <td>{value.phone}</td>
                                <td>{value.status}</td>
                                <td style={{ textAlign: 'right' }}>
                                  <button
                                    onClick={() => childaction(value)}
                                    className="btn btn-xm px-1 py-1 btn btn-xm"
                                  >
                                    <FontAwesomeIcon
                                      style={{ color: 'green' }}
                                      icon={faCheck}
                                    />
                                  </button>
                                  <button
                                    onClick={() => childaction2(value)}
                                    className="btn btn-xm px-0 py-1 btn btn-xm text-align left"
                                  >
                                    <FontAwesomeIcon
                                      style={{ color: 'red' }}
                                      icon={faCircleXmark}
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
        </section>
      </div>
    </>
  );
};
export default Pending_List;
