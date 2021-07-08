import React from 'react';

const User = ({ contacts, index }) => {
    return (
        <div className="contacts" key={index}>
            <h3>Name: {contacts.name}</h3>
            <p>Number: {contacts.number}</p>
            <p>Location: {contacts.location}</p>
            <hr />
        </div>
    );
}

export default User;