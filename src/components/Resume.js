import React from 'react';
import Navbar from "../components/Navbar"
import resumePDF from '../images/resume.pdf'; // Import your PDF file

const Resume = () => {
  return (
    <div className="resume-container">
      <Navbar />
      <div>
        <h1>Resume</h1>
        <embed 
          src={resumePDF}
          type="application/pdf"
          width="100%"
          height="1000px"
        />
        {/* Alternative using iframe */}
        {/* <iframe
          src={resumePDF}
          width="100%"
          height="600px"
          title="resume"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Resume;
