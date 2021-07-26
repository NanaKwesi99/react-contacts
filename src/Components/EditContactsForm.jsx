import React, { Component } from "react";
import "./EditContactsForm.css";



class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contact.name || "",
      phoneNumber: props.contact.phoneNumber || "",
      location: props.contact.location || "",
      id: props.contact.id || "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]:value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editContact(this.state);
    alert("Contact edited")
    this.setState({
        name: "",
        phoneNumber: "",
        location: ""
    });
    this.props.closeModal();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="edit-contactForm">
            <div>
            <label htmlFor="name">Name: </label><br/>
            <input className="edit-inputField"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <label htmlFor="phoneNumber">Phone Number: </label><br/>
            <input className="edit-inputField"
                type="number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <label htmlFor="locaton">Location: </label><br/>
            <input className="edit-inputField"
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
            />
            </div>
            <div className="edit-sub">
            <button className="btn btn-success edit-submit">Save Changes</button>
            </div>
        </form>
    );
  }
}

export default ContactsForm;