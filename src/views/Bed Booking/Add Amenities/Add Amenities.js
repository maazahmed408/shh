import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import EditableRow1 from 'src/views/Bed Booking/Add Amenities/EditableRow1';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Add_Amenities = () => {
  const [valueData, setvalueData] = useState([]);
  const [amenities, setamenities] = useState('');
  const [r, setr] = useState(0);
  const [editContactId, setEditContactId] = useState(null);
  const [dis, setDis] = useState(false);
  const [btn, setBtn] = useState('Save');

  async function handleFormSubmit(e) {
    e.preventDefault();
    setBtn('Loading...');
    setDis(true);
    let item = { amenities };

    let result = await axios.post(baseUrl + '/addAmenities', item, {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    if (result) {
      setr(r + 1);
      setBtn('Save');
      setDis(false);
      toast.success('Amenity added successfully', { autoClose: 600 });
    }
    setamenities('');
  }
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/getAmenities', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, [r]);

  const AmenitiesAction = async (id) => {
    const p = id.amenities;
    const delaminities = async () => {
      const result = await axios.delete(baseUrl + '/deleteAmenities', {
        data: { amenities: p },
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      });
      if (result) {
        setr(r + 1);
        toast.success('Amenity deleted successfully', { autoClose: 600 });
      }
      setamenities('');
    };
    var answer = window.confirm('Are you sure? You want to delete: ' + p);
    console.log(answer);
    if (answer) {
      delaminities();
    }
  };

  const [contacts, setContacts] = useState(valueData);
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      amenities: editFormData.amenities,
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
    amenities: ' ',
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
                Add New Amenity
              </h2>
            </div>
            <div class=" Addnow1 col row-12 d-flex">
              <div className=" facility1 col-sm-10 ">
                <form onSubmit={handleFormSubmit}>
                  <input
                    style={{ marginLeft: '30px', paddingTop: '5px' }}
                    type="text"
                    name="amenities"
                    value={amenities}
                    required="required"
                    placeholder="Add New Amenity"
                    onChange={(e) => {
                      setamenities(e.target.value);
                    }}
                  />

                  <button
                    type="submit"
                    disabled={dis}
                    className="submit2"
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
                              <th>Amenities List</th>
                            </tr>
                          </thead>
                          <tbody style={{ width: '5px' }}>
                            {valueData.length > 1 &&
                              valueData.map((value) => (
                                <Fragment>
                                  {editContactId === value.amenities ? (
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
                                          <td>{value.amenities}</td>
                                          <td style={{ textAlign: 'right' }}>
                                            <button
                                              onClick={() =>
                                                AmenitiesAction(value)
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
export default Add_Amenities;
