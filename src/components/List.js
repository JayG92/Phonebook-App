import React, { Component } from "react";
import PropTypes from "prop-types";
import "./List.css";

class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  };

  state = {
    filterText: ""
  };

  onChangeFilterText = event => {
    console.log(event.target.value);
    this.setState({
      filterText: event.target.value
    });
  };

  render() {
    const filteredContacts = this.props.contacts.filter(
      // contacts will get dumped here
      contact => {
        return (
          contact.name
            .toLowerCase()
            .indexOf(this.state.filterText.toLowerCase()) !== -1
        );
        // if doesn't find it will return -1
      }
    );
    return (
     
      <div className={"listArea"}>
        <h1>Search Here</h1>
        <input
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
          name={"filter"}
          id={"filter"}
          placeholder={"Filter by name or phone"}
        />

        <ul className={"list"}>
        <h2>List of Contacts</h2>
          {filteredContacts.map(contact => (
            <li key={contact.phone}>
              
              <span className={"name"}>{contact.name}</span>
              <span className={"phone"}>{contact.phone}</span>
              <span className={"clearfix"}></span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
