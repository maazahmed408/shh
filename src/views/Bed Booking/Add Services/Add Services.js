import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import EditableRow1 from 'src/views/Bed Booking/Add Services/EditableRow1';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Add_Services = () => {
  const [valueData, setvalueData] = useState([]);
  const [services, setservices] = useState('');
  const [r, setr] = useState(0);
  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState(valueData);
  const [dis, setDis] = useState(false);
  const [btn, setBtn] = useState('Save');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setBtn('Loading');
    setDis(true);
    let item = { services };
    let result = await axios.post(baseUrl + '/addServices', item, {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    if (result) {
      setr(r + 1);
      setBtn('Save');
      setDis(false);
      toast.success('Service added successfully', { autoClose: 600 });
    }
    setservices('');
  };
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/getServices', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, [r]);

  const ServicesAction = async (id) => {
    const p = id.services;
    const delservices = async () => {
      const result = await axios.delete(baseUrl + '/deleteServices', {
        data: { services: p },
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      });
      if (result) {
        setr(r + 1);
        toast.success('Service deleted successfully', { autoClose: 600 });
      }
    };
    var answer = window.confirm('Are you sure? You want to delete: ' + p);
    if (answer) {
      delservices();
    }
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      servicesName: editFormData.servicesName,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex(
      (contact) => contact._id === editContactId,
    );
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const [editFormData, setEditFormData] = useState({
    servicesName: ' ',
  });

  return (
    <>
      <div>
        <section class="content">
          <div class="container-fluid">
            <div class="block-header">
              <h2
                className="Addbed"
                style={{ color: '#056078', fontSize: '13px' }}
              >
                Add New Service
              </h2>
            </div>
            <div class=" Addnow1 col row-12 d-flex">
              <div className=" facility1 col-sm-10 ">
                <form onSubmit={handleFormSubmit}>
                  <input
                    style={{ marginLeft: '30px', paddingTop: '5px' }}
                    type="text"
                    name="servicesName"
                    value={services}
                    required="required"
                    placeholder="Add New Service"
                    onChange={(e) => {
                      setservices(e.target.value);
                    }}
                  />

                  <button
                    type="submit"
                    className="submit2"
                    disabled={dis}
                    style={{
                      background: '#056078',
                      color: 'white',
                      marginLeft: '100px',
                      borderRadius: '5px',
                    }}
                  >
                    {btn}
                  </button>
                </form>
              </div>
            </div>
            <div class="row clearfix" style={{ marginTop: '20px' }}>
              <div class="facility col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                  <div class="body table-responsive">
                    <div className="response">
                      <form onSubmit={handleEditFormSubmit}>
                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                          <thead>
                            <tr>
                              <th>Services List</th>
                            </tr>
                          </thead>
                          <tbody style={{ width: '5px' }}>
                            {valueData.length != 0 &&
                              valueData.map((value) => (
                                <Fragment>
                                  {editContactId === value.servicesName ? (
                                    <EditableRow1 editFormData={editFormData} />
                                  ) : (
                                    <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                      <thead style={{ textAlign: 'left' }}>
                                        <tr
                                          style={{
                                            paddingTop: '30px',
                                            marginLeft: '30px',
                                            width: '10px',
                                          }}
                                        >
                                          <td>{value.services}</td>
                                          <td style={{ textAlign: 'right' }}>
                                            <button
                                              onClick={() =>
                                                ServicesAction(value)
                                              }
                                              className="btn btn-xm px-1 py-1 btn btn-xm"
                                            >
                                              <i class="fas fa-trash"></i>
                                            </button>
                                          </td>
                                        </tr>
                                      </thead>
                                    </table>
                                    // <ReadOnlyRow1 contact={value} />
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
          </div>
        </section>
      </div>
    </>
  );
};
export default Add_Services;
