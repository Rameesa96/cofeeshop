import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_shc9t5v', 'template_4golp6y', form.current, '0cJ1gXsESH9XLWyr-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contacticon'/>
            <h4>Email</h4>
            <h5>prameesa96@gmail.com</h5>
            <a href="mailto:prameesa96@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp  className='contacticon'/>
            <h4>WhatsApp</h4>
            <h5>+919847654595</h5>
            <a href="https://wa.me/919847654595">Send a message</a>
          </article>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' name='name' required/>
          <input type="email" placeholder='Your Email' name='email' required/>
          <textarea placeholder='Your message' name='message' rows='7' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact