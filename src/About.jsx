import React, { Component } from 'react';
import './List.css';
import Nav from "./Nav";


class Info extends Component{
    state = {  }
    render() {
  
      return (
          <div className="list">
            <Nav />
            <div className= "list" style= {{padding:"20px 20px"}}> 
              Information
            </div> 
          </div>
      );
    }
  }
    
    export default Info;