import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import James from '../assets/james.jpg'
import mridhula from '../assets/Mridhula.jpg'
import rohini from '../assets/rohini.jpg'
import anila from '../assets/anila.jpg'
import rajiv from '../assets/rajiv.jpg'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";


import "swiper/css";
import "swiper/css/pagination";
import './Swiper.css'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Swipers() {
    const data=[
 
        {
          img:rohini,
          name:"Rohini"
        },
        {
            name:"Rajiv",
          img:rajiv
        },
        {
          img:anila,
          name:"Anila",

        },
        {
          img:mridhula,
          name:"Mridhula"
        },
        {
          img:James,
          name:"James"
        }
      ]
  return (
    <div><section>
    <Swiper pagination={true} modules={[Pagination]} className="container certificatecontainer">
     
    {data.map((im)=>{
   return(
    <SwiperSlide>
      <article className="certificates">

        <div className="articleimg">
         <img src={im.img} className="certificateimage" alt="" />
         
        </div>
        <div className='swipertext'>
       
        <p className='swiperpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elabefug</p>
        <FontAwesomeIcon icon="fas fa-quote-left" />
        <h3 className='swiperhead'>{im.name}</h3>
        </div>
      </article> 
      </SwiperSlide> )})}
        
  
     </Swiper>
   
     </section></div>
  )
}

export default Swipers