import React from 'react';
import './about.css';
import SpecialHeadin from '../specialHeading/SpecialHeadin'
function About() {
  return (
    <div className='about'>
       <SpecialHeadin 
       title="About Us"
       text = "If You do right , it will last forever"
       />
       <div className='container'>
        <div className='image'>
        <img src='../../../images/about.jfif'/>
        </div>
        <div className='text'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
            <hr />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p>
        </div>
       </div>
    </div>
  )
}

export default About
