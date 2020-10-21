import React from 'react';

const Icon = (props) => {

  return (
    <a href={props.link} target="_blank" 
      rel="noopener noreferrer"

      onMouseOver={() => props.onMouseOverEvent(props.name)} 
      onMouseLeave={props.onMouseLeaveEvent}>
        
      <svg class="icon icon-bubble icon-larger">
        <use xlinkHref={ '#' + props.name }></use>
      </svg>
    </a>
  )

};

export default Icon;
            
