import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const HospitalAdmin_list = () => {
  const [r, setr] = useState(0);
  const [valueData, setvalueData] = useState([]);

  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/getHospitalAdmin', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };

  useEffect(() => {
    resultDAta();
  }, [r]);

  const AdminDel = async (id) => {
    const p = id.uid;

    const AdminHosDel = async () => {
      const result = await axios.delete(
        baseUrl + '/admin/deleteHospitalAdmin',
        {
          data: { uid: p },
          headers: {
            Authorization: `Bearer ` + localStorage.getItem('token'),
          },
        },
      );
      if (result) {
        setr(r + 1);
        toast.error('Hospital Sub Admin deleted successfully', {
          autoClose: 600,
        });
      }
    };
    var answer = window.confirm('Are you sure? You want to delete: ' + p);
    console.log(answer);
    if (answer) {
      AdminHosDel();
    }
  };

  const [contacts, setContacts] = useState(valueData);

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
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
                    <h2>Hospital Admin List </h2>
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
                            <th>Userid</th>
                            <th>Hospital Code</th>
                            <th>Action </th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length > 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>{value.uid}</td>
                                <td>{value.hospitalCode}</td>
                                <td style={{ textAlign: 'center' }}>
                                  <button className="btn btn-xm px-1 py-1 btn btn-xm">
                                    <i
                                      onClick={() => AdminDel(value)}
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
        </section>
      </div>
    </>
  );
};
export default HospitalAdmin_list;
