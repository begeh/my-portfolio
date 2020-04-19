import React from 'react';
import '../App.css';

export default function ProjectItem (props){
  return(
  
      <a href={props.linkUrl}>
        <div className="project-container">
        <img src={props.imageUrl}
              className="project-item" alt="Underconstruction" />
        <div className="overlay">
          <div className="text">{props.title}</div>
        </div>
      </div>
      </a>
      
  )
}