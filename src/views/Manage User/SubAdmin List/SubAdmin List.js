import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const SubAdmin_list = () => {
  const [r, setr] = useState(0);
  const [valueData, setvalueData] = useState([]);

  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/getAllSubAdmins', {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };
  useEffect(() => {
    resultDAta();
  }, [r]);

  const AdminAction = async (id) => {
    const p = id.uid;

    const AdminSub = async () => {
      const result = await axios.delete(baseUrl + '/admin/deleteSubAdmin', {
        data: { uid: p },
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      });
      if (result) {
        setr(r + 1);
        toast.error('Sub-Admin deleted successfully', {
          autoClose: 600,
        });
      }
    };
    var answer = window.confirm('Are you sure? You want to delete: ' + p);
    console.log(answer);
    if (answer) {
      AdminSub();
    }
  };

  return (
    <div>
      <h2 style={{ marginLeft: '30%' }}>Sub-admin List</h2>
      <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
        <thead>
          <tr
            className="tablepatient"
            style={{
              paddingTop: '30px',
              marginLeft: '30px',
              width: '5px',
              backgroundColor: '#246073',
            }}
          >
            <th style={{ color: 'white' }}>User-id</th>
            <th style={{ color: 'white' }}>Privilege</th>
            <th style={{ color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody style={{ width: '5px' }}>
          {valueData.length > 0 &&
            valueData.map((value) => (
              <tr>
                <td>{value.uid}</td>
                <td>{value.duty}</td>
                <td style={{ textAlign: 'left' }}>
                  <button className="btn btn-xm px-1 py-1 btn btn-xm">
                    <i
                      onClick={() => AdminAction(value)}
                      class="fas fa-trash"
                    ></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default SubAdmin_list;
