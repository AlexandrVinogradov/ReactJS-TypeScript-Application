import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper brown darken-3 p1px">
      <a href="/" className="brand-logo">Ts + React</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Todo list</NavLink></li>
        <li><NavLink to="/about">Information</NavLink></li>
      </ul>
    </div>
  </nav>
)