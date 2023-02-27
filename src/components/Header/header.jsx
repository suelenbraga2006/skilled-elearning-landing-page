import React from 'react';

import skilled from '../../assets/images/logo-dark.svg';
import './styles.scss';

function Header() {
  return (
    <header>
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
    </header>
  );
}

export default Header;
