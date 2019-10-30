import React, { Component } from "react";
import Contacts from "./Contacts";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contact: [
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
   console.log('incoming contact: ', contact)
  }

  render() {
    return (
      <div className="App">
        <Contacts
          contact={this.state.contact}
          addContact={this.addContact}
        />
      </div>
    );
  }
}
export default App;
