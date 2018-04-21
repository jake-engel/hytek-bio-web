import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="/contactus">Contact Us</Link>
      <Link to="/news">News</Link>
      <Link to="/technologies">Technologies</Link>
    </div>
  );
};

export default Header;
