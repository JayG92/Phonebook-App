import React, { Component } from "react";
import Contacts from "./Contacts";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts: [
      {
        name: "Stephen Curry",
        phone: "415-555-5555"
      },
      {
        name: "Klay Thompson",
        phone: "510-555-5555"
      }
    ]
  };

  addContact(contact) {
    console.log("Incoming Contact: ", contact);
    // filling contact under the state
    const { contacts } = this.state;
    contacts.push(contact);
    // updating the state
    this.setState({
      contacts
    });
  }
  render() {
    return (
      <div className="App">
        <Contacts
          // Sending method to contact component
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
