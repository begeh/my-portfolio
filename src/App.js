import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

      <body class="container-fluid">

        <img src="https://static.tumblr.com/ae070b84991083acd2ac020e7e5af357/lfdgcup/RR5mtptv9/tumblr_static_toronto_boy_header.jpg" alt="Toronto" class="img-responsive img1" />
        <h1 class="h1"> BASHIR EGEH</h1>
        <div class="row">
          <a href="#toabout" class="scroll-links">
            <h2 class="col-xs-4 text-center header-border">
              ABOUT
          </h2>
          </a>
          <a href="#toprojects" class="scroll-links">
            <h2 class="col-xs-4 text-center header-border">
              PROJECTS
            </h2>
          </a>
          <a href="#tocontact" class="scroll-links">
            <h2 class="col-xs-4 text-center header-border">
              CONTACT
            </h2>
          </a>
        <div class="black-background">
        <h2 class="about_title"><a name="toabout"></a> ABOUT ME</h2>
          <img src="https://i.imgur.com/fcVrks5.jpg?2" alt="BashirPic" class= "portrait-border" align="right" />
            <p class="p col-xs-12 black-background">  
              I'm a pharmacist based out of the Scarborough district of Toronto. I'm looking to diversify my skills and take on new challenges in the expanding field of computer programming. I aim to learn as much and participate in as many projects as I can in order to improve my coding skills. One day, I hope to pursue a career in video game development and contribute to a medium that has had such a profound influence on my life.
            </p>
          </div>
        <div>
          <h2 class="project_title"><a name="toprojects"></a>PROJECTS </h2>

          <div class="col-xs-12">     
            <a href="https://codepen.io/BEgeh/full/PWJxmo/" target="_blank"><img src="https://i.imgur.com/SQdnJRq.png" 
            class="img2 col-xs-3" width="100%" height="228px" alt="Photo of Profile project" /></a>

            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            class="img2 col-xs-3" width="100%" height="228px" alt="Underconstruction" /></a>
              
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            class="img2 col-xs-3" width="100%" height="228px" alt="Underconstruction" /></a>
                
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            class="img2 col-xs-3" width="100%" height="228px" alt="Underconstruction" /></a>      
          </div>
          <div class="col-xs-12">      
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            class="img2 col-xs-3" width="100%" height="228px" alt="Underconstruction" /></a>
              
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            class="img2 col-xs-3" width="100%" height="228px" alt="Underconstruction" /></a>
                
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            class="img2 col-xs-3" width="100%" height="228px" alt="Underconstruction" /></a>   
                
            <a href="#"><img src="http://www.clipartkid.com/images/254/website-currently-under-construction-APcYla-clipart.jpg"
            class="img2 col-xs-3" width="100%" height="228px" alt="Underconstruction" /></a>   
          </div>    
          </div>
        </div>
          <h1 class="contact-header"><a name="tocontact"></a>CONTACT ME</h1>
        <h2>Email: b_egeh@hotmail.com</h2>
        <div class="col-xs-12">
          <a href="https://www.facebook.com/bashirabdi.egeh" target="_blank"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDvg36emnVR8gQKmtDb-jQOl1fkDTpSjdOpt9oEpGh7TX_wILLXhz3xg" alt="Facebook Link" width="70px" align="left" class="spacing" /></a>
          <h2 class="icon"> Facebook</h2>
        </div>
          <div class="col-xs-12">
          <a href="https://ca.linkedin.com/in/bashir-egeh-776954129" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUQ-8JWaklA2oYy8tMvU-IX0fEymeq4W2laB1xjvuWYVwIV_dKCl6wA" alt="LinkedIn Link" width="70px" align="left" class="spacing" /></a>
          <h2 class="icon"> LinkedIn</h2>
        </div>
      </body>
  );
}

export default App;
