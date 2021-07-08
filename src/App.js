import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import ContactsForm from "./Components/ContactsForm";
import './App.css';

class App extends Component {
  constructor (props) {
        super (props)

        this.state = {

           contacts : [




                ]
        }
  }


  handleAddContact = (newUser) => {
        this.setState({
          contacts: [...this.state.contacts, newUser]
        })
  }


  render() {


    return (
      <center>
        <ContactsForm addUser ={this.handleAddContact}/>
        <br/>
        {

          this.state.contacts.map(
            (contact,index)=> {
              return(
                <div>
                <Contacts key ={index} name ={contact.name} number ={contact.number} location = {contact.location}/>
                
               </div>
              )
            }
          )


        }
      </center>
    );
  }
}

export default App;