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
          <NavLink to="/departure" className="link">Departure</NavLink>
          <NavLink to="/logs" className="link">Logs</NavLink>
          <NavLink to="/feed" className="link">Feed</NavLink>
          <NavLink to="/map" className="link">Map</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
