import React from 'react';

import './styles.scss';

function Courses({ courses }) {
  return (
    <section className="courses">
      <article className="highlight">
        <h2>Check out our most popular courses!</h2>
      </article>

      {courses.map((course) => (
        <article key={course.id}>
          <img
            src={require(`../../assets/images/icon-${course.icon}.svg`)}
            alt={course.title}
          />
          <h3>{course.title}</h3>
          <p>{course.text}</p>
          <a href="/getstarted">Get Started</a>
        </article>
      ))}
    </section>
  );
}

export default Courses;
