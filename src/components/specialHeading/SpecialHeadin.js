import React from 'react';
import './specialHeading.css';
function SpecialHeadin({title , text}) {
  return (
    <div className='special-heading'>
      <h1>{title} </h1>
      <p>{text}</p>
    </div>
  )
}

export default SpecialHeadin
