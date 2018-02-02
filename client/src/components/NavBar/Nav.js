import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";


class Nav extends Component {

  constructor(props) {
      super(props);

  } // End Constructor


  render(){

    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">New York Times Article Search</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="./home" style={{"text-decoration": "none"}}>Home</a></li>
              <li><a href="./saved" tyle={{"text-decoration": "none"}}>Saved</a></li>
            </ul>
          </div>
        </nav>
      </div>
  )} // End of Render
} // End of Class


export default Nav;
