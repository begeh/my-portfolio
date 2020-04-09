import React from 'react';
import '../App.css';

export default function ProjectItem (props){
  return(
  
      <a href={props.linkUrl}>
        <div class="container">
        <img src={props.imageUrl}
              className="project-item" alt="Underconstruction" />
        <div class="overlay">
          <div class="text">Hello World</div>
        </div>
      </div>
      </a>
      
  )
}