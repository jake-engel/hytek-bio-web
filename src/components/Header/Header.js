import React from 'react';
import { Link } from 'react-router-dom';

const HEADER_LINKS = ['Home', 'Technologies', 'News', 'About', 'Contact Us'];

const Header = () => {
  const renderLinks = () => {
    return HEADER_LINKS.map(link => {
      return (
        <Link
          className={link === 'Home' ? 'active' : ''}
          key={link}
          to={'/' + link.replace(/\s/g, '').toLowerCase()}
        >
          {link}
        </Link>
      );
    });
  };

  return <div className="topnav">{renderLinks()}</div>;
};

export default Header;
