import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import ReadOnlyRow from 'src/views/Hospital/Rejected Hospital/ReadOnlyRow';
import EditableRow from 'src/views/Hospital/Rejected Hospital/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';

const RejectedHospital_List = () => {
  const [valueData, setvalueData] = useState([]);
  const [result1, setresult1] = useState([]);

  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/signupRejectHospital', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    console.log('result1', result1);
    setresult1(result.data);
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, []);

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
                    <h2>Rejected Hospitals list</h2>
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
                            <th>Hospital Name</th>
                            <th>Hospital Code</th>
                            <th>Hospital Type</th>
                            <th>Hospital Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {result1.length !== 0 &&
                            valueData.map((value) => (
                              <Fragment>
                                {editContactId === value.hospitalName ? (
                                  <EditableRow editFormData={editFormData} />
                                ) : (
                                  <ReadOnlyRow contact={value} />
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
    </>
  );
};
export default RejectedHospital_List;
