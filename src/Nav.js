import React, { Component, } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './List.css';
import About from './About'
import Contact from './Contact'


// import logo from './nohri2019.png'

const navStyle = {
    position:"fixed",
    top: "0px",
    right:"0",
    left: "auto",
    width: "100vh",
    overflow: "scroll",
    // width: "12.3%",
    // padding: "10px 10px",
    borderBottom: "2px solid #000",
    letterSpacing: ".02em"
  };
const innerStyle = {
    alignItems: "center",
    listStyleType: "none"
};

// function Index() {
//   return <h2>Studio</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Contact() {
//   return <h2>Contact</h2>;
// }

class Nav extends Component{
  render() { 
    return ( <Router>
       <div style={navStyle} className="rotate">
        <ul className="list" style={innerStyle}>
                <li><Link to="/">Studio</Link></li>
                <li><Link to="/About"style={{marginLeft: "2em"}}>About</Link></li>
                <li><Link to="/Contact"style={{marginLeft: "2em"}}>Contact</Link></li>
              </ul>
        {/* <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} /> */}
    </div>
    </Router>
    );
  }
}
  
  export default Nav;