import React from 'react';

export const Navbar: React.FC = () => (
    <nav>
    <div className="nav-wrapper brown darken-3 p1px">
      <a href="/" className="brand-logo">Ts + React</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Todo list</a></li>
        <li><a href="/">Information</a></li>
      </ul>
    </div>
  </nav>
)