import React, { Component } from 'react';
import './List.css';
import Nav from "./Nav";


class Contact extends Component{
    state = {  }
    render() {
  
      return (
          <div className="list">
            <Nav />
            <div className= "list" style= {{padding:"20px 20px"}}> 
              Contact 
            </div> 
          </div>
      );
    }
  }
    
    export default Contact;