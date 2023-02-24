import React from 'react';

import animation from '../../assets/images/icon-animation.svg';
import design from '../../assets/images/icon-design.svg';
import './styles.scss';

function Courses() {
  return (
    <section className="courses">
      <article className="check">
        <h2>Check out our most popular courses!</h2>
      </article>
      <article>
        <img src={animation} alt="Animation" />
        <div className="background">
          <h3>Animation</h3>
          <p>
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </p>
          <a href="/getstarted">Get Started</a>
        </div>
      </article>
      <article>
        <img src={design} alt="Animation" />
        <div className="background">
          <h3>Design</h3>
          <p>
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <a href="/getstarted">Get Started</a>
        </div>
      </article>
    </section>
  );
}

export default Courses;
