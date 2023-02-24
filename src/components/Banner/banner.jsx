import React from 'react';

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
    </section>
  );
}

export default Banner;
