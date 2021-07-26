import React, { Component } from "react";
import ContactsForm from "./Components/ContactsForm";
import ContactsList from "./Components/ContactsList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
       
      ],
    };
  }

  handleAddContact = (newContact) => {
    newContact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  handleDeleteContact = (contactId) => {
    const contactSaved = this.state.contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    this.setState({ contacts: contactSaved });
  };

  handleEditContact = (updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      ),
    });
  };

  render() {
    return (
      <div className="completeContact">
        <ContactsForm addContact={this.handleAddContact} />
        <ContactsList
          contacts={this.state.contacts}
          deleteContact={this.handleDeleteContact}
          editContact={this.handleEditContact}
        />
      </div>
    );
  }
}

export default App;