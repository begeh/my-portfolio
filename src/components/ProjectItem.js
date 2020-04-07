import React from 'react';
import '../App.css';

export default function ProjectItem (props){
  return(
    <a href={props.linkUrl}><img src={props.imageUrl}
            className="project-item" alt="Underconstruction" /></a>
  )
}