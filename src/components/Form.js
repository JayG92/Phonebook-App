import React, { Component } from 'react';

class Form extends Component {
    render(){
        return(
            <div>
               <form>
                   <h3>Add New Contact</h3>
                   <input name="name" id="name" placeholder="Enter Name" />
                   <br/>
                   <input name="phone" id="phone" placeholder="Enter a Phone number" />
                   <button>Add Contact</button>
               </form>
            </div>
        )
    }
}

export default Form;