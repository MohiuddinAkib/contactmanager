import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ branding }) => {
  return (
    <div>
      {/* <h4 style={{ color: 'red', fontSize: '50px' }}>{branding}</h4> */}
      {/* <h4 style={headingStyles}>{branding}</h4> */}
      <nav className="navbar navbar-dark navbar-expand-md bg-primary mb-4">
        <div className="container">
          <a href="#" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus" />
                  Add contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

const headingStyles = {
  color: 'red',
  fontSize: '50px'
};

export default Header;
