import React, { Component } from "react";
import { connect } from 'react-redux';
import { addContact, getAllcontacts } from '../Actions/ContactActions'
import './ContactsForm.css';

class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Phone: "",
      Location: "",
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
    this.props.addNewContact(this.state);
    this.setState({
        Name: "",
        Phone: "",
        Location: ""
    })
  }
  componentDidMount(){
    this.props.getAllcontacts()
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="contactForm">
            <h1>Create Contact</h1>
            <div>
            <label htmlFor="name">Name: </label><br/>
            <input className="inputField"
                type="text"
                name="Name"
                value={this.state.Name}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <label htmlFor="phoneNumber">Phone Number: </label><br/>
            <input className="inputField"
                type="number"
                name="Phone"
                value={this.state.Phone}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <label htmlFor="locaton">Location: </label><br/>
            <input className="inputField"
                type="text"
                name="Location"
                value={this.state.Location}
                onChange={this.handleChange}
            />
            </div>
            <div className="sub">
            <button className="submit">Add Contact</button>
            </div>
        </form>
    );
  }
}

const mapDispatchToProps = {
  addNewContact: addContact,
  getAllcontacts: getAllcontacts
}

export default connect(null, mapDispatchToProps)(ContactsForm);