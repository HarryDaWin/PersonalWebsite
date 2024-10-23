import React from 'react';
import Navbar from "../components/Navbar"

const Resume = () => {
  return (
    <div className="resume-container">
      <Navbar />
      <div>
        <h1>About Me</h1>
        <p>This is the About page where you can introduce yourself.</p>
      </div>
    </div>
  );
};

export default Resume;