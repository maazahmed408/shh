import React, { useEffect, useState } from "react";
//import {RadioButton} from "react"
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
//import { Checkbox } from "@material-ui/core";
//import { faL } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Add_user = () => {
    const savenotification = () => toast("Successfully Save");
    const [uid, setuid] = useState('');
    const [password, setpassword] = React.useState('');
    const [duty, setduty] = useState('')
    //const[management, setmanagement] =useState('')
    //const[finance, setfinance] =useState('')

    //const [check, setCheck] = useState([])
    // const [favorite, setFavorite] = useState('dog');
    // const handleCatChange = () => {
    //     setFavorite('cat');
    // };

    // const handleDogChange = () => {
    //     setFavorite('dog');
    // };
   
    async function handleFormSubmit(e) {
        e.preventDefault();
        let item = { uid, password, duty };
        let result = await axios.post(baseUrl + '/addSubAdmin', item, { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZG1pbiIsImlhdCI6MTY1MDUyNDM1MiwiZXhwIjoxNjUwNjEwNzUyfQ.1yRZrFK_a8gliDWFEKKCZXlIBK2NfK7ncqaG6xgpnIg` }});
        console.log(result)
    }
    return (
        <>
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                                <div className="card">
                                    <div className="header">
                                        <h2>Add New SubAdmin </h2>
                                    </div>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="body">
                                            <div className="row clearfix">
                                                <div className="col-sm-6 ">
                                                    <div className="form-group1">
                                                        <lable>User Id</lable>
                                                        <div className="form-line1">
                                                            <input
                                                                name="Userid"
                                                                value={uid}
                                                                required="required"
                                                                onChange={(e) => {
                                                                    setuid(e.target.value);
                                                                }}
                                                                className="form-control no-resize"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 ">
                                                    <div className="form-group1">
                                                        <lable>password</lable>
                                                        <div className="form-line1">
                                                            <input
                                                                name="password"
                                                                required="required"
                                                                value={password}
                                                                onChange={(e) => {
                                                                    setpassword(e.target.value);
                                                                }}
                                                                className="form-control no-resize"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6>Account Privileges: Management/Finance</h6>
                                            <div className="row d-flex">
                                            <div className="col-sm-6 ">
                                                    <div className="form-group1">
                                                    
                                                        <div className="form-line1">
                                                            <input
                                                                name="password"
                                                                required="required"
                                                                value={duty}
                                                                onChange={(e) => {
                                                                    setduty(e.target.value);
                                                                }}
                                                                className="form-control no-resize"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text align-right">
                                                <button className="" style={{ border: '1px solid', background: '#056078', color: 'white', width: 'rem', height: '2.5rem', borderRadius: '5px' }} type="submit" onClick={savenotification}>Save</button>
                                                <ToastContainer />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >

            </div >
        </>
    )
}
export default Add_user;