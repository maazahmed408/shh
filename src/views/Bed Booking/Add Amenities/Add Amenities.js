import React, { useState, Fragment } from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
//import { Link } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';

//import data from "src/views/Bed Booking/Add Amenities/mock-data1.json";
import ReadOnlyRow1 from "src/views/Bed Booking/Add Amenities/ReadOnlyRow1";
import EditableRow1 from "src/views/Bed Booking/Add Amenities/EditableRow1";
//import { nanoid } from "nanoid";


const Add_Amenities = () => {
    const [valueData, setvalueData] = useState([]);
    const getData = valueData;
    console.log(getData)
    const [amenities, setamenities] = useState('');
    const [editContactId, setEditContactId] = useState(null);
    const [amenitiesCharges, setamenitiesCharges] = React.useState('');


    async function handleFormSubmit(e) {
        e.preventDefault();
        let item = { amenities, amenitiesCharges };
        let result = await axios.post(baseUrl + '/addAmenities', item, { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZG1pbiIsImlhdCI6MTY1MDM1NTIzMCwiZXhwIjoxNjUwNDQxNjMwfQ.q9GpBPhVBhSQ07z_rfLok3HIE1rIhodgFHOl6tmj0_Q` } });
        console.log(result)
    }
    const resultDAta = async () => {
        const result = await axios.get(baseUrl + '/allfindAmenities', {
           
        });
        await setvalueData(result.data);
    };
    resultDAta();
    console.log(valueData);

    const [contacts, setContacts] = useState(valueData);
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            amenities: editFormData.amenities,
            amenitiesCharges: editFormData.amenitiesCharges,
          };
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact._id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
       setEditContactId(null);
      };
    
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };

    const [addFormData, setAddFormData] = useState({
        amenities: ' ',
        amenitiesCharges: ' ',
    });
    const [editFormData, setEditFormData] = useState({
        amenities: ' ',
        amenitiesCharges: ' ',
    });
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            amenities: contact.aminities,
            amenitiesCharges: contact.amenitiesCharges,
        };
        setEditFormData(formValues);
    };
    const handleCancelClick = () => {
        setEditContactId(null);
      };
    const handleDeleteClick = (editContactId) => {
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    };

    return (
        <>
            <div>
                <section class="content">
                    <div class="container-fluid">
                        <div class="block-header">
                            <h2 className="Addbed" style={{ color: '#056078', fontSize: '13px' }}>Add Amenities</h2>
                        </div>
                        <div class=" Addnow1 col row-12 d-flex">
                            <div className=" facility1 col-sm-10 ">
                                <form onSubmit={handleFormSubmit}>
                                    <input style={{ marginLeft: '30px', paddingTop: '5px' }}
                                        type="text"
                                        name="amenities"
                                        value={amenities}
                                        required="required"
                                        placeholder="Add Amenities"
                                        onChange={(e) => {
                                            setamenities(e.target.value);
                                        }}
                                    />
                                    <input style={{ marginLeft: '30px', paddingTop: '5px' }}
                                        type="text"
                                        name="amenitiesCharges"
                                        required="required"
                                        value={amenitiesCharges}
                                        placeholder="AdditionalCharges"
                                        onChange={(e) => {
                                            setamenitiesCharges(e.target.value);
                                        }}

                                    />
                                    <button type="submit" className="submit2" style={{ background: '#056078', color: 'white', marginLeft: '100px', borderRadius: '5px' }} >Save</button>
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
                                                            <th>Add Aminities</th>
                                                            <th>Additional Charges</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ width: '5px' }}>
                                                        {valueData.length > 1 &&
                                                            valueData.map((value) => (
                                                                <Fragment>
                                                                    {editContactId === value.amenities ? (
                                                                        <EditableRow1 editFormData={editFormData} />
                                                                    ) : (
                                                                        <ReadOnlyRow1 contact={value} />
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
    )
}
export default Add_Amenities;