import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectItem from './components/ProjectItem';

function App() {
  return (

      <body className="body">

        <img src="https://static.tumblr.com/ae070b84991083acd2ac020e7e5af357/lfdgcup/RR5mtptv9/tumblr_static_toronto_boy_header.jpg" alt="Toronto" className="img-responsive img1" />
        <h1 className="name"> BASHIR EGEH</h1>
        <div className="navbar">
          <div>
            <a href="#toabout" className="scroll-links">
              <h2 className="nav-item">
                ABOUT
              </h2>
            </a>
          </div>
          <div>
            <a href="#toprojects" className="scroll-links">
              <h2 className="nav-item">
                PROJECTS
              </h2>
            </a>
          </div>
          <div>
            <a href="#tocontact" className="scroll-links">
              <h2 className="nav-item">
                CONTACT
              </h2>
            </a>
          </div>
        </div>
        <div className="black-background">
          <h2 className="about_title"><a name="toabout"></a> ABOUT ME</h2>
          <img src="https://i.imgur.com/fcVrks5.jpg?2" alt="BashirPic" className= "portrait-border" align="right" />
            <p className="p col-xs-12 black-background">  
              I'm a pharmacist based out of the Scarborough district of Toronto. I'm looking to diversify my skills and take on new challenges in the expanding field of computer programming. I aim to learn as much and participate in as many projects as I can in order to improve my coding skills. One day, I hope to pursue a career in video game development and contribute to a medium that has had such a profound influence on my life.
            </p>
        </div>
          <h2 className="project_title"><a name="toprojects"></a>PROJECTS </h2>

          <div className="project">
            <ProjectItem /> 
            <ProjectItem />  
            <ProjectItem />  
            <ProjectItem />
            <ProjectItem />
          </div>
          <div>     
            <a href="https://codepen.io/BEgeh/full/PWJxmo/" target="_blank"><img src="https://i.imgur.com/SQdnJRq.png" 
            className="img2" alt="Photo of Profile project" /></a>

            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            className="img2" alt="Underconstruction" /></a>
              
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            className="img2" alt="Underconstruction" /></a>
                
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            className="img2" alt="Underconstruction" /></a>      
          </div>
          <div className="col-xs-12">      
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            className="img2" alt="Underconstruction" /></a>
              
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            className="img2" alt="Underconstruction" /></a>
                
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            className="img2" alt="Underconstruction" /></a>   
                
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            className="img2" alt="Underconstruction" /></a>   
          </div>    
          <h1 className="contact-header"><a name="tocontact"></a>CONTACT ME</h1>
        <h2>Email: b_egeh@hotmail.com</h2>
        <div className="col-xs-12">
          <a href="https://www.facebook.com/bashirabdi.egeh" target="_blank"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDvg36emnVR8gQKmtDb-jQOl1fkDTpSjdOpt9oEpGh7TX_wILLXhz3xg" alt="Facebook Link" width="70px" align="left" className="spacing" /></a>
          <h2 className="icon"> Facebook</h2>
        </div>
          <div className="col-xs-12">
          <a href="https://ca.linkedin.com/in/bashir-egeh-776954129" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUQ-8JWaklA2oYy8tMvU-IX0fEymeq4W2laB1xjvuWYVwIV_dKCl6wA" alt="LinkedIn Link" width="70px" align="left" className="spacing" /></a>
          <h2 className="icon"> LinkedIn</h2>
        </div>
      </body>
  );
}

export default App;
