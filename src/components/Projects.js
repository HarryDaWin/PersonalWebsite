import React from 'react';
import Navbar from "../components/Navbar"
import Work from "./Work"
import obitoImage from "../images/obito.jpg"

const Projects = () => {
  return (
    <div className="projects-container">
      <Navbar />
      <div>
        <h1>Projects</h1>
          <Work photo = {obitoImage}
            title="Interactive Map Web Application" 
            companyName="Capstone Project" 
            companyDate="Apr 2024 - Aug 2024"
            description="Developed an interactive web app for students to access information about important landmarks related to Jason
                        Washington. Implemented a simple back end for our sponsor to change or update data. Used agile methods with GitHub to complete each tasks,
                        Features it handles are user location and direction, an admin panel for our sponsor to update content, and a search
                        bar for users to search for specific markers," 
            skills="Web Development, API, Leaflet, Backend-Development, Collaboration, Agile" 
          />
          <Work photo = {obitoImage}
          title="IRC Server and Client" 
          companyName="CS 494p Network Protocols" 
          companyDate="Jan 2023 - Apr 2023"
          description="This project implements an IRC server and client using Python’s socket and threading libraries. It supports basic functionalities 
          such as creating rooms, joining rooms, sending messages, listing rooms and
          members, and disconnecting from the server. Implemented multiple client connections concurrently through threading and gracefully shuts down upon receiving
          a SIGINT signal (Ctrl-C)"
          skills="Python, Websocket API, IP, HTTP Protocol" 
          />
      </div>
    </div>
  );
};

export default Projects;