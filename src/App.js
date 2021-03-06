import React, {useRef} from 'react';
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectItem from './components/ProjectItem';
import Contact from './components/Contact';

import skyline from './docs/skyline.jpg';
import download_icon from './docs/download-icon.svg';

import connections from './data/connections.json';
import projects from './data/projects.json';

function App() {
  const {x,y} = useScrollPosition();
  const imageHeader = useRef(null);
  const nameHeader = useRef(null);
  const nav = useRef(null);

  if(y > 0){
    const headerHeight = nameHeader.current.clientHeight + imageHeader.current.clientHeight;
    const navHeight = document.getElementById("nav").clientHeight;

    if(y >= headerHeight){
      document.getElementById("navPlholder").style.height =  `${navHeight}px`;
      document.getElementById("nav").className = "fixed-navbar";
    } else if (y && y < headerHeight){
      document.getElementById("navPlholder").style.height =  "0px";
      document.getElementById("nav").className = "navbar";
    }
  }
  return (

      <div className="body">

        <img ref={imageHeader} src={skyline} alt="Toronto" className="img-responsive header-image" />
        <h1 ref={nameHeader} className="name"> BASHIR EGEH</h1>
        <div id="navPlholder"></div>
        <div ref={nav} id="nav" className="navbar">
          <div>
            <a href="#toabout" className="scroll-links">
              <h2 className="nav-item nav-shadow">
                ABOUT
              </h2>
            </a>
          </div>
          <div>
            <a href="#toprojects" className="scroll-links">
              <h2 className="nav-item nav-shadow">
                PROJECTS
              </h2>
            </a>
          </div>
          <div>
            <a href="#tocontact" className="scroll-links">
              <h2 className="nav-item nav-shadow">
                CONTACT
              </h2>
            </a>
          </div>
        </div>
        <a name="toabout"></a>
        <div className="about-me">
          <h2 className="about_title">ABOUT ME</h2>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQFgY9GdNy6D-w/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=9rkxhSAO0Oti0OCFyEbH_2kmGQQvSxlc1ozICu1Dz6g" alt="BashirPic" className= "portrait" align="right" />
            <p className="summary">  
              I'm a pharmacist-turned full-stack web developer based out of the Scarborough district of Toronto. I'm looking to diversify my skills and take on new challenges in the expanding field of computer programming and web development. I aim to learn as much and participate in as many projects as I can in order to improve my coding skills. One day, I hope to be involved in video game development and contribute to a medium that has had such a profound influence on my life.
            </p>
        </div>
        <a name="toprojects"></a>
        <h2 className="project_title">PROJECTS </h2>
        <div className="project">
          {
            projects.map((project, index)=>(
              <ProjectItem key={index} title={project.title} imageUrl={project.imageUrl} linkUrl={project.linkUrl} />
            ))
          }   
        </div>
        <div className="footer">
          <div className="contact">
              <a name="tocontact"></a>
              <h1 className="contact-header">CONNECT</h1>
              <h2><u>Email</u>: <a className="link" href="mailto: b_egeh@hotmail.com">b_egeh@hotmail.com</a></h2>
              {
                connections.map((connection, index) =>(
                  <Contact 
                  key={index}
                  title={connection.title}
                  imageUrl={connection.imageUrl}
                  linkUrl={connection.linkUrl}
                  alt={connection.alt}
                  />
                ))
              }
          </div>
          <div className='button-container'>
          <a href="https://drive.google.com/file/d/1qj6HMYkNVumG-hJ9OvRsUn1UrzioAloO/view?usp=sharing">
            <button className="resume-btn">
                <p>
                <img src={download_icon} alt="Download" className="download"/>
                  Download Resumé</p>
            </button>
            </a>
          </div>
        </div>
      </div>
  );
}

export default App;
