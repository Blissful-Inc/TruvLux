import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Header.css';


/**
 * Header Component
 * @return{void}
 */
function Header() {
  return (
    <React.Fragment>
      <NavLink to="/" className="home">Truvlux</NavLink>
      <div className="container">
        <div>
          <NavLink to="/" className="link">Depart</NavLink>
          <NavLink to="/" className="link">Logs</NavLink>
          <NavLink to="/" className="link">Feed</NavLink>
          <NavLink to="/map" className="link">Map</NavLink>
        </div>
        {/* <h1 className="header">Header</h1> */}
      </div>
    </React.Fragment>


  );
}

export default Header;
