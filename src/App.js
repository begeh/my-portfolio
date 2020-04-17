import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectItem from './components/ProjectItem';
import Contact from './components/Contact';

const projects = [
{
  title: "Level UP",
  imageUrl: "https://i.imgur.com/FPw0fLx.png?1",
  linkUrl: "https://github.com/begeh/level-up"
},
{
  title: "Interview Scheduler",
  imageUrl: "https://i.imgur.com/CEfPkvA.png?1",
  linkUrl: "https://github.com/begeh/scheduler"
},
{
  title: "GAMEBOARD",
  imageUrl: "https://i.imgur.com/2H7tdGe.png?1",
  linkUrl: "https://github.com/begeh/multi-user-card-games"
},
{
  title: "Tweeter",
  imageUrl: "https://i.imgur.com/Sx44fWS.png?1",
  linkUrl: "https://github.com/begeh/tweeter"
},
{
  title: "Tiny App",
  imageUrl: "https://i.imgur.com/wTOwkUt.png?1",
  linkUrl: "https://github.com/begeh/tinyapp"
},
{
  title: "Random Kanye Quote Generator",
  imageUrl: "https://i.imgur.com/LjrYqdR.png",
  linkUrl: "https://codepen.io/BEgeh/full/evOJyw"
},
{
  title: "Under Construction",
  imageUrl: "http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg",
  linkUrl: ""
},
{
  title: "Under Construction",
  imageUrl: "http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg",
  linkUrl: ""
}
]

const connections = [
  {
    title: "Facebook",
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDvg36emnVR8gQKmtDb-jQOl1fkDTpSjdOpt9oEpGh7TX_wILLXhz3xg",
    linkUrl: "https://www.facebook.com/bashirabdi.egeh",
    alt: "Facbebook Link"
  },
  {
    title: "LinkedIn",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUQ-8JWaklA2oYy8tMvU-IX0fEymeq4W2laB1xjvuWYVwIV_dKCl6wA",
    linkUrl: "https://ca.linkedin.com/in/bashir-egeh-776954129",
    alt: "LinkedIn Link"
  },
  {
    title: "GitHub (begeh)",
    imageUrl: "https://ctl.s6img.com/society6/img/y-xZ_syD7LhIJOGtpdTU08ra6Aw/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8e29a2e79387449caa28090d71f489e3/~~/github-logo-prints.jpg",
    linkUrl: "https://github.com/begeh",
    alt: "Github Link"
  }
]
function App() {
  return (

      <body className="body">

        <img src="https://static.tumblr.com/ae070b84991083acd2ac020e7e5af357/lfdgcup/RR5mtptv9/tumblr_static_toronto_boy_header.jpg" alt="Toronto" className="img-responsive header-image" />
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
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQFgY9GdNy6D-w/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=9rkxhSAO0Oti0OCFyEbH_2kmGQQvSxlc1ozICu1Dz6g" alt="BashirPic" className= "portrait" align="right" />
            <p className="summary">  
              I'm a pharmacist-turned full-stack web developer based out of the Scarborough district of Toronto. I'm looking to diversify my skills and take on new challenges in the expanding field of computer programming and web development. I aim to learn as much and participate in as many projects as I can in order to improve my coding skills. One day, I hope to pursue a career in video game development and contribute to a medium that has had such a profound influence on my life.
            </p>
        </div>
        <h2 className="project_title"><a name="toprojects"></a>PROJECTS </h2>
        <div className="project">
          {
            projects.map((project, index)=>(
              <ProjectItem title={project.title} imageUrl={project.imageUrl} linkUrl={project.linkUrl} />
            ))
          }   
        </div>
        <div className="contact">
          <h1 className="contact-header"><a name="tocontact"></a>CONNECT</h1>
          <h2>Email: <a className="link" href="mailto: b_egeh@hotmail.com">b_egeh@hotmail.com</a></h2>
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
      </body>
  );
}

export default App;
