import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo1.png"

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg"  style={{padding:0, margin:0}} >
        <Link to="/" className="navbar-brand" style={{padding:0}}><img src={logo} style={{width:250, padding:0, margin:0}} alt="Logo"></img></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">

          <li className="navbar-item">
          <Link to="/" className="nav-link">Projects</Link>
          </li>

          <li className="navbar-item">
          <Link to="/test" className="nav-link">Create Projects</Link>
          </li>

          <li className="navbar-item">
          <Link to="/company" className="nav-link">Create Companies</Link>
          </li>


        </ul>
        </div>
      </nav>
    );
  }
}