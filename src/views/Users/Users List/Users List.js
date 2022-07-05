import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';

const User_list = () => {
  const [valueData, setvalueData] = useState([]);
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/getAllUsers', {
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
    fullName: ' ',
    dateOfBirth: ' ',
    phone: '',
    gender: '',
    email: '',
  });
  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      dateOfBirth: editFormData.dateOfBirth,
      phone: editFormData.phone,
      gender: editFormData.gender,
      email: editFormData.email,
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
                    <h2>Users List</h2>
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
                            <th>FullName</th>
                            <th>DOB</th>
                            <th>uid</th>
                            <th>gender</th>
                            <th>email</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !== 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>{value.fullName}</td>
                                <td>{value.dateOfBirth}</td>
                                <td>{value.uid}</td>
                                <td>{value.gender}</td>
                                <td>{value.email}</td>
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
export default User_list;
