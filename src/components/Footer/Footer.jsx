import React from 'react';

import logo from '../../assets/images/logo-light.svg';

import './styles.scss';

function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/getstarted">Get Started</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
