import React from 'react'
import './portfolio.css'
import PortfolioItem from './PortfolioItem'
import SpecialHeadin from '../specialHeading/SpecialHeadin'
function Portfolio() {
  return (
    <div className='portfolio'>
        <SpecialHeadin
        title="Portfolio"
        text = "If you do right , it will last forever "
         />
        <div className='container'>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    </div>
  )
}

export default Portfolio
