import React from 'react';

import skilled from '../../assets/images/logo-light.svg';
import './styles.scss';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="container">
          <img src={skilled} alt="Skilled" />
          <nav>
            <ul>
              <li>
                <a href="/getstarted">Get Started</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
