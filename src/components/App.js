import React, { Component } from "react";
import Contacts from "./Contacts";
import "./App.css";

class App extends Component {
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
  render() {
    return (
      <div className="Phonebook App">
        <Contacts />
      </div>
    );
  }
}
export default App;
