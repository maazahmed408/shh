import React, { useState, Fragment } from 'react';
import ReadOnlyRow from 'src/views/Bookings/Bookings/ReadOnlyRow';
import EditableRow from 'src/views/Bookings/Bookings/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';

const Bookings = () => {
  const [valueData, setvalueData] = useState({});

  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/getAllHospitalBookings', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };
  resultDAta();

  const [contacts, setContacts] = useState(valueData);
  const [editFormData, setEditFormData] = useState({
    address: ' ',
    altPhone: ' ',
    dob: ' ',
    doctorName: ' ',
    email: ' ',
    employerName: ' ',
    familyMember: ' ',
    fatherHusbandName: ' ',
    gender: ' ',
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
                    <h2> Bookings </h2>
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
                            <th>PatientName</th>
                            <th>FamilyMember</th>
                            <th>Dob</th>
                            <th>gender</th>
                            <th>F/H Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length > 1 &&
                            valueData.map((value) => (
                              <Fragment>
                                {editContactId === value.uid ? (
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
export default Bookings;
