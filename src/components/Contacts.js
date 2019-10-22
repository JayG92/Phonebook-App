import React, { Component } from 'react';
import List from './List';
import Form from './Form';

export default class Contacts extends Component {
    state = {
        contact:[
            {
                name: 'Stephen Curry',
                phone: "415-555-5555"
            },
            {
                name: 'Klay Thompson',
                phone: '510-555-5555'
            }
        ]
    }
    render(){
        return(
            <div>
                <h1>Contacts Component</h1>
                <Form/>
                {/* this is grabbing from "contact array" */}
                <List contacts= {this.state.contact} />
            </div>
        )
    }
}
