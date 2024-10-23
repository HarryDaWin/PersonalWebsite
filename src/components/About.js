import React from 'react';

import Navbar from "../components/Navbar"

function About () {
  return (
    <div className="about-container">
      <Navbar />
      <div>
        <h1>About Me</h1>
        <p>This is the About page where you can introduce yourself.</p>
      </div>
    </div>
  );
};

export default About;
