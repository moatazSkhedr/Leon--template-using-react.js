import React from 'react'
import './services.css';
import SpecialHeadin from '../specialHeading/SpecialHeadin'
import ServItem from './ServItem';
function Services() {
  return (
    <div className='service' >
        <SpecialHeadin
        title="Services"
        text = "Don't Be Busy , be Productives "
         />
         <div className='container'>
            <div className='.col'>
                <ServItem 
                image ="bi bi-check-circle-fill"
                title="Graphic Design"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />
                <ServItem
                image ="bi bi-code-square"
                title ="Web Design"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

                 />
            </div>
            <div className='.col'>
            <ServItem
               image ="bi bi-cpu"
               title ="UX && UI"
               text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                 />
                <ServItem
               image ="bi bi-cpu"
               title ="UX && UI"
               text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                 />

            </div>
            <div className='.col'>
            <ServItem
               image ="bi bi-cpu"
               title ="UX && UI"
               text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                 />
                <ServItem
               image ="bi bi-cpu"
               title ="UX && UI"
               text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                 />

            </div>
         </div>
      
    </div>
  )
}

export default Services
