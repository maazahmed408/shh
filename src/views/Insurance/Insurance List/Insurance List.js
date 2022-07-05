import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import EditableRow from 'src/views/Insurance/Insurance List/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Insurance_list = () => {
  //Hooks
  const [valueData, setvalueData] = useState([]);
  const [insurance, setinsurance] = useState('');
  const [tpa, setTpa] = useState('');
  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState(valueData);
  const [r, setr] = useState(0);
  const [dis, setDis] = useState(false);
  const [btn, setBtn] = useState('Save');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setDis(true);
    setBtn('Loading...');
    let item = { insurance, tpa };
    let result = await axios.post(baseUrl + '/addInsurance', item, {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    if (result) {
      setr(r + 1);
      setDis(false);
      setBtn('Save');
      toast.success('Insurance added successfully', { autoClose: 600 });
    }
    setinsurance('');
    setTpa('');
  };
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/getInsurance', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };

  const InsuranceAction = async (id) => {
    const p = id.insurance;
    const q = id.tpa;

    const del = async () => {
      const result = await axios.delete(baseUrl + '/deleteInsurance', {
        data: { insurance: p, tpa: q },
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      });
      if (result) {
        setr(r + 1);
        toast.success('Insurance deleted successfully', { autoClose: 600 });
      }
    };

    var answer = window.confirm(
      'Are you sure? You want to delete :' + p + ' (' + q + ')',
    );
    console.log(answer);
    if (answer) {
      del();
    }
  };
  useEffect(() => {
    resultDAta();
  }, [r]);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex(
      (contact) => contact._id === editContactId,
    );
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

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
                Add New Insurance
              </h2>
            </div>
            <div class=" Addnow1 col row-12 d-flex">
              <div className=" facility1 col-sm-10 ">
                <form onSubmit={handleFormSubmit}>
                  <input
                    style={{ marginLeft: '30px', paddingTop: '5px' }}
                    type="text"
                    name="insurance"
                    value={insurance}
                    required="required"
                    placeholder="Add New Insurance"
                    onChange={(e) => {
                      setinsurance(e.target.value);
                    }}
                  />
                  <input
                    style={{
                      marginLeft: '30px',
                      paddingTop: '5px',
                      width: '15rem',
                    }}
                    type="text"
                    value={tpa}
                    name="TPA"
                    required="required"
                    placeholder="Third Party Administrator (TPA)"
                    onChange={(e) => {
                      setTpa(e.target.value);
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
                    // onClick={()=>handleEditFormSubmit(e)}
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
                              <th>Insurances List</th>
                              <th>Third Party Administrator(TPA)</th>
                            </tr>
                          </thead>
                          <tbody style={{ width: '5px' }}>
                            {valueData.length > 0 &&
                              valueData.map((value) => (
                                <tr>
                                  <td>{value.insurance}</td>
                                  <td>{value.tpa}</td>
                                  <td style={{ textAlign: 'center' }}>
                                    <button className="btn btn-xm px-1 py-1 btn btn-xm">
                                      <i
                                        onClick={() => InsuranceAction(value)}
                                        class="fas fa-trash"
                                      ></i>
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
          </div>
        </section>
      </div>
    </>
  );
};
export default Insurance_list;
