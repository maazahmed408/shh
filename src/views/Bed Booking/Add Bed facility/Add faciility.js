import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import EditableRow1 from 'src/views/Bed Booking/Add Bed facility/EditableRow1';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Add_facility = () => {
  const [valueData, setvalueData] = useState([]);
  const [facilities, setfacilities] = useState('');
  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState(valueData);
  const [r, setr] = useState(0);
  const [dis, setDis] = useState(false);
  const [btn, setBtn] = useState('Save');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setDis(true);
    setBtn('Loading...');
    let item = { facilities };
    let result = await axios.post(baseUrl + '/addFacilities', item, {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    if (result) {
      setr(r + 1);
      setDis(false);
      setBtn('Save');
      toast.success('Facilities added successfully', { autoClose: 600 });
      setfacilities('');
    }
  };

  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/getFacilities', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, [r]);

  const FacilityAction = async (id) => {
    const p = id.facilities;

    const facility = async () => {
      const result = await axios.delete(baseUrl + '/deleteFacilities', {
        data: { facilities: p },
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      });
      if (result) {
        setr(r + 1);
        toast.success('Facilities deleted successfully', { autoClose: 600 });
      }
    };
    var answer = window.confirm('Are you sure? You want to delete: ' + p);
    console.log(answer);
    if (answer) {
      facility();
    }
  };

  console.log(valueData);
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      facilities: editFormData.facilities,
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
    facilities: ' ',
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
                Add New Facility
              </h2>
            </div>
            <div class=" Addnow1 col row-12 d-flex">
              <div className=" facility1 col-sm-10 ">
                <form onSubmit={handleFormSubmit}>
                  <input
                    style={{ marginLeft: '30px', paddingTop: '5px' }}
                    type="text"
                    name="facilities"
                    value={facilities}
                    required="required"
                    placeholder="Add New Facility"
                    onChange={(e) => {
                      setfacilities(e.target.value);
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
                              <th>Facilities Name</th>
                            </tr>
                          </thead>
                          <tbody style={{ width: '5px' }}>
                            {valueData.length !== 0 &&
                              valueData.map((value) => (
                                <Fragment>
                                  {editContactId === value.facilities ? (
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
                                          <td>{value.facilities}</td>
                                          <td style={{ textAlign: 'right' }}>
                                            <button
                                              onClick={() =>
                                                FacilityAction(value)
                                              }
                                              className="btn btn-xm px-1 py-1 btn btn-xm"
                                            >
                                              <i class="fas fa-trash"></i>
                                            </button>
                                          </td>
                                        </tr>
                                      </thead>
                                    </table>
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
export default Add_facility;
