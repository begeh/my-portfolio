import React from 'react';

export default function Contact (props){
  return(
    <div>
      <a href={props.linkUrl} target="_blank" className="link">
        <img src={props.imageUrl} alt={props.alt} width="70px" align="left" className="spacing" />
        <h2 className="icon"> {props.title}</h2>
      </a>
  </div>
  )
}