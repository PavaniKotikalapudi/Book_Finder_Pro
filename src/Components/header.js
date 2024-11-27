import './header.css';

import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Book Finder</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/all-books">All Books</Link>
        <Link to="/sample-books">Sample Books</Link>
      </nav>
    </header>
  );
}

export default Header;
