import React from "react";
import PropTypes from "prop-types";
import List from "./List";
import Form from "./Form";

const Contacts = props => (
  <div>
    {/* Sending the states to the List component */}
    <List contacts={props.contacts} />
    <Form addContact={props.addContact} />
  </div>
);

Contacts.prototypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func
};

export default Contacts;
