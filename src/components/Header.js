import React from 'react';
import './Header.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/productlist">Product List</Link></li>
          <li className="nav-item"><Link to="/order">Order Now</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
