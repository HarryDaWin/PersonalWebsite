import React from 'react';

import Navbar from "../components/Navbar"
import Work from "./Work"
import Intro from "./Intro"

import obitoImage from '../images/obito.jpg'; // Import the image

function About () {
  return (
    <div className="about-container">
      <Navbar />
      <div>
        <h1>About Me</h1>
        <div className='profile'>
          <img 
            src={obitoImage} 
            alt="Profile" 
            className="profile-image"
          />
          <Intro />
        </div>
          <Work photo = {obitoImage}
            title="Computer Science Major" 
            companyName="Portland State University" 
            companyDate="Sep 2021 - Aug 2024" 
            skills="Web Development, Operating Systems, Web Security, GEN AI, Data Structures & Algorithms, Software Engineering" 
          />
      </div>
    </div>
  );
};

export default About;
