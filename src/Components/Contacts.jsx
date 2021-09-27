import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import EditContactsForm from './EditContactsForm';
import './Contacts.css';
import { deleteContact } from '../Actions/ContactActions';
import {connect} from 'react-redux';


const Contacts = ({contacts, deleteContact, editContact }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    deleteContact(contacts.id);
  }
    return (
      <>
        <div className="contact">
          <h3>Name: {contacts.Name}</h3>
          <p>Phone Number: {contacts.Phone}</p>
          <p>Location: {contacts.Location}</p>
          <div className="contact-btn">
            <button className="btn btn-success edit" onClick={handleShow}>Edit</button>
            <button className="btn btn-danger delete" onClick={handleDelete}>Delete</button>
            </div>
          <hr />
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditContactsForm contact={contacts} editContact={editContact} closeModal={handleClose} />
          </Modal.Body>
        </Modal>
    </>
    )
}

const mapDispatchToProps = {
  deleteContact: deleteContact
}

export default connect(null, mapDispatchToProps) (Contacts);