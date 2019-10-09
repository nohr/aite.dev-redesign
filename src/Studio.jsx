import React, { Component } from 'react';
import './List.css';
import Nav from "./Nav";
import List from "./List";


class Studio extends Component {
    state = {}
    render() {
        return ( <div >
            <Nav />
            <div className= "list" style= {{padding:"20px 20px"}}> 
                Selected Works 
            </div> 
            <List />
            </div>
        );
    };
};

export default Studio;