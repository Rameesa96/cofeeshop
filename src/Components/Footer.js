import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp } from 'react-icons/bs'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.css'
const Footer = () => {
  return (
   <footer>
    <a href="#" className='swiperhead'><i>Logo</i></a>
    <ul className='linksfoter'>
      <li><a href="#">Home</a></li>
      <li><a href="#story">Our Story</a></li>
      <li><a href="#menu">Our Menu</a></li>
      <li><a href="#contact">Contact Us</a></li>
     
    </ul>
    <div className="footer_socials">
    <a href='' className="social" target='_blank'><InstagramIcon/></a>
    <a href='' className="social" target='_blank'><FacebookIcon/></a>
      <a href='' className="social" target='_blank'><BsWhatsapp /></a>
    </div>
    <div className="footer_copyright">
      <small>@copyright Rameesa</small>
    </div>
   </footer>
  )
}

export default Footer