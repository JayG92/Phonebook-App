import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import PropTypes from "prop-types"

export default class Contacts extends Component {
    static propTypes = {
        contact: PropTypes.array.isRequired,
        addContact: PropTypes.func
    }

  render() {
    // console.log("Props coming from Contacts Component: ", this.props);
    return (
      <div>
        <h1>Contacts Component</h1>
        {/* this is grabbing from "contact array" */}
        <List contact={this.props.contact} />
        <Form addContact={this.props.addContact} />
      </div>
    );
  }
}
