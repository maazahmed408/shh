import React from 'react';
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.patientName}</td>
      <td>{contact.familyMember}</td>
      <td>{contact.dob}</td>
      <td>{contact.phone}</td>
      <td>{contact.gender}</td>
      <td>{contact.fatherHusbandName}</td>
      <td>{contact.address}</td>
      <td>{contact.email}</td>
      <td>{contact.nationality}</td>
      <td>{contact.religion}</td>
      <td>{contact.occupation}</td>
      <td>{contact.altPhone}</td>
      <td>{contact.bookingStatus}</td>
    </tr>
  );
};

export default ReadOnlyRow;
