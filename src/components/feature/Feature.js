import React from 'react'
import './feature.css';
import FeatItem from './FeatItem';
function Feature() {
  return (
    <div className='feature'>
        <div className='container'>
           <FeatItem />
           <FeatItem />
           <FeatItem />
        </div>
      
    </div>
  )
}

export default Feature
