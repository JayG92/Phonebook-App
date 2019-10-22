import React, { Component } from 'react';
import List from './List';
import Form from './Form';

export default class Contacts extends Component {
    render(){
        return(
            <div>
                <h1>Contacts Component</h1>
                <Form/>
                <List/>
            </div>
        )
    }
}
