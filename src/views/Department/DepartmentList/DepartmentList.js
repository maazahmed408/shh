import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import EditableRow from 'src/views/Department/DepartmentList/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Department_list = () => {
  const [valueData, setvalueData] = useState([]);
  const [department, setdepartment] = useState('');
  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState(valueData);
  const [r, setr] = useState(0);
  const [dis, setDis] = useState(false);
  const [btn, setBtn] = useState('Save');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setDis(true);
    setBtn('Loading...');
    let item = { department };
    let result = await axios.post(baseUrl + '/addDepartment', item, {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    if (result) {
      setr(r + 1);
      setDis(false);
      setBtn('Save');
      toast.success('Depatments added successfully', { autoClose: 600 });
    }
    setdepartment('');
  };
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/getDepartment', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, [r]);
  const departmentAction = async (id) => {
    const p = id.department;
    const del = async () => {
      const result = await axios.delete(baseUrl + '/deleteDepartment', {
        data: { department: p },
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      });
      if (result) {
        setr(r + 1);
        toast.success('Departments deleted successfully', { autoClose: 600 });
      }
    };

    var answer = window.confirm('Are you sure? You want to delete: ' + p);
    console.log(answer);
    if (answer) {
      del();
    }
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      id: editContactId,
      department: editFormData.department,
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
    insurance: ' ',
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
                Add New Department
              </h2>
            </div>
            <div class=" Addnow1 col row-12 d-flex">
              <div className=" facility1 col-sm-10 ">
                <form onSubmit={handleFormSubmit}>
                  <input
                    style={{ marginLeft: '30px', paddingTop: '5px' }}
                    type="text"
                    name="insurance"
                    value={department}
                    required="required"
                    placeholder="Add New Department"
                    onChange={(e) => {
                      setdepartment(e.target.value);
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
                              <th>Departments List</th>
                            </tr>
                          </thead>
                          <tbody style={{ width: '5px' }}>
                            {valueData.length !== 0 &&
                              valueData.map((value) => (
                                <Fragment>
                                  {editContactId === value.department ? (
                                    <EditableRow editFormData={editFormData} />
                                  ) : (
                                    <table
                                      class="table table-bordered table-striped table-hover js-basic-example dataTable"
                                      style={{ width: '100%' }}
                                    >
                                      <thead class="" style={{ width: '' }}>
                                        <tr
                                          style={{
                                            paddingTop: '30px',
                                            marginLeft: '30px',
                                            width: '10px',
                                          }}
                                        >
                                          <td>{value.department}</td>

                                          <td style={{ textAlign: 'right' }}>
                                            <button
                                              onClick={() =>
                                                departmentAction(value)
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
export default Department_list;
