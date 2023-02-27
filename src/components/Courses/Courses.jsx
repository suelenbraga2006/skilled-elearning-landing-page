import React from 'react';

import animation from '../../assets/images/icon-animation.svg';
import './styles.scss';

function Courses() {
  return (
    <section className="courses">
      <article className="highlight">
        <h2>Check out our most popular courses!</h2>
      </article>

      <article>
        <img src={animation} alt="Animation" />
        <h3>Animation</h3>
        <p>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
        <a href="/getstarted">Get Started</a>
      </article>

      <article>
        <img src={animation} alt="Animation" />
        <h3>Animation</h3>
        <p>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
        <a href="/getstarted">Get Started</a>
      </article>

      <article>
        <img src={animation} alt="Animation" />
        <h3>Animation</h3>
        <p>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
        <a href="/getstarted">Get Started</a>
      </article>
    </section>
  );
}

export default Courses;
