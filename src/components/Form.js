import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    // Method Binding //
    this.onChange = this.onChange.bind(this);
  }
  state = {
    name: "",
    phone: ""
  };

  onChange(e){
      this.setState({
          [e.target.name]:e.target.value
      })
      console.log('state', this.state);
  }


  render() {
    return (
      <div>
        <form>
          <h3>Add New Contact</h3>
          <input 
          name="name" 
          id="name" 
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.onChange} />
          <br />
          <input 
          name="phone" 
          id="phone" 
          placeholder="Enter a Phone number"
          value={this.state.phone}
          onChange={this.onChange} />
          <button>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
