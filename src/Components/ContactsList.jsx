import React from 'react';
import Contacts from './Contacts';

const ContactsList = ({contacts, deleteContact, editContact}) => {
    const contactsList = contacts.map((contact) => {
        return (
          <Contacts contact={contact} deleteContact={deleteContact} editContact={editContact} />
        );
      });

    return (
        <div>
            {contactsList}
        </div>
    );
}

export default ContactsList;