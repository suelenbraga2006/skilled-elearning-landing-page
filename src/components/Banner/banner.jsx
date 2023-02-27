import React from 'react';

import hero_mobile_png from '../../assets/images/image-hero-mobile.png';
import hero_tablet_png from '../../assets/images/image-hero-tablet.png';
import hero_desktop_png from '../../assets/images/image-hero-desktop.png';
import './styles.scss';

function Banner() {
  return (
    <section className="banner">
      <article>
        <h1>Maximize skill, minimize budget</h1>
        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <a href="/getstarted">Get Started</a>
      </article>
      <picture>
        <img src={hero_desktop_png} alt="Members and Course Hours" />
      </picture>
    </section>
  );
}

export default Banner;
