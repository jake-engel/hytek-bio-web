import React from 'react';
import { Link } from 'react-router-dom';

const HEADER_LINKS = ['Technologies', 'News', 'About', 'Contact Us'];

const Header = () => {
  const renderLinks = () => {
    return HEADER_LINKS.map(link => {
      return (
        <Link
          to={'/' + link.replace(/\s/g, '').toLowerCase()}
          className="navbar-link-items"
          key={link}
        >
          {link}
        </Link>
      );
    });
  };

  return (
    <div className="navbar-hytek">
      <div className="navbar-hytek-logo">
        <Link to="/">
          <img src="logo.png" alt="HY-TEK Bio LLC Logo" />
        </Link>
      </div>
      <div className="navbar-hytek-logo" />
      <div className="navbar-links">
        <ul id="navbar-links">{renderLinks()}</ul>
      </div>
    </div>
  );
};

export default Header;
