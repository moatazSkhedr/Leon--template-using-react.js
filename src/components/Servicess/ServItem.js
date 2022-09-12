import React from 'react'
import "./servItem.css"
function ServItem({image , title , text}) {
  return (
    <div className='serv'>
      <i class={image}></i>
      <div className='text'>
      <h3>{title}</h3>
      <p> {text}</p>

      </div>
    </div>
  )
}

export default ServItem
