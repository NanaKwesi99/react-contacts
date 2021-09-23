import React, { Component } from "react";
import "./EditContactsForm.css";
import { editContact } from "../Actions/ContactActions";
import {connect} from "react-redux";


class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: props.contact.Name || "",
      Phone: props.contact.Phone || "",
      Location: props.contact.Location || "",
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
        Name: "",
        Phone: "",
        Location: ""
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
                name="Name"
                value={this.state.Name}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <label htmlFor="phoneNumber">Phone Number: </label><br/>
            <input className="edit-inputField"
                type="number"
                name="Phone"
                value={this.state.Phone}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <label htmlFor="locaton">Location: </label><br/>
            <input className="edit-inputField"
                type="text"
                name="Location"
                value={this.state.Location}
                onChange={this.handleChange}
            />
            </div>
            <div className="edit-sub">
            <button className="btn btn-success edit-submit">Save Changes</button>
            </div>
        </form>
    );
  }
};

const mapDispatchToProps = {
  editContact: editContact
}

export default connect(null, mapDispatchToProps) (ContactsForm);