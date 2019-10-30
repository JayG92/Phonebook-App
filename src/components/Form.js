import React, { Component } from "react";
import PropTypes from 'prop-types'

class Form extends Component {
  constructor() {
    super();
    // Method Binding //
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };
static propTypes = {
    addContact: PropTypes.func
};

  state = {
    name: "",
    phone: ""
  };

  onSubmit(e){
    e.preventDefault();
    this.props.addContact({
        ...this.state
    });
  }

  onChange(e) {
    //   allows us to capture whats being typed in forms //
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Add New Contact</h3>
          <input
            name="name"
            id="name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <br />
          <input
            name="phone"
            id="phone"
            placeholder="Enter a Phone number"
            value={this.state.phone}
            onChange={this.onChange}
          />
          <button>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
