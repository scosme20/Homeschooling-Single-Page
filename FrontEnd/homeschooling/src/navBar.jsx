import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/home" className="navbar-logo">Infinity School of Future</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/student" className="navbar-link">Student</Link>
          </li>
          <li className="navbar-item">
            <Link to="/classes" className="navbar-link">Classes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/disciplines" className="navbar-link">Disciplines</Link>
          </li>
          <li className="navbar-item">
            <Link to="/teachers" className="navbar-link">Teachers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

