import React from 'react';

import hero_mobile_png from '../../assets/images/image-hero-mobile.png';
import hero_mobile_1x from '../../assets/images/image-hero-mobile.webp';
import hero_moile_2x from '../../assets/images/image-hero-mobile@2x.webp';
import hero_tablet_1x from '../../assets/images/image-hero-tablet.webp';
import hero_tablet_2x from '../../assets/images/image-hero-tablet@2x.webp';
import hero_desktop_1x from '../../assets/images/image-hero-desktop.webp';
import hero_desktop_2x from '../../assets/images/image-hero-desktop@2x.webp';
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
        <source
          media="(min-width: 1440px)"
          srcSet={`${hero_desktop_1x} 1x, ${hero_desktop_2x} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${hero_tablet_1x} 1x, ${hero_tablet_2x} 2x`}
          type="image/webp"
        />
        <source
          media="(max-width: 375px)"
          srcSet={`${hero_mobile_1x} 1x, ${hero_moile_2x} 2x`}
          type="image/webp"
        />
        <img src={hero_mobile_png} alt="Members and Course Hours" />
      </picture>
    </section>
  );
}

export default Banner;
