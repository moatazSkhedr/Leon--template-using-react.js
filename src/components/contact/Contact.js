import React from 'react'
import './contact.css';
import SpecialHeadin from '../specialHeading/SpecialHeadin'
function Contact() {
  return (
    <div className='contact'>

         <SpecialHeadin 
         title="Contact "
         text="Don't Be Busy , be Productive"
         />
         <div className='container'>
            <div className='text'>
                <h3 className='lable'>Feel Free to drop us a line at :</h3>
                <h3 className='mail'>moatazkhedr774@gmail.com</h3>
                <div className='socila'>
                    Find Us On Social Networks
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-twitter"></i>

                </div>

                
            </div>
         </div>
      
    </div>
  )
}

export default Contact
