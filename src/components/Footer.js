import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/side-hustle-logo.b504d49a.svg';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa'
import { WhatsAppWidget } from 'react-whatsapp-widget';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-div'> 
            <h1 className='footer-title'>Stay in the loop</h1>
            <p>Be the first to get the latest updates from our fast-growing community of African youths.</p>
        </div>
        <form className='form'>
            <input type='text' placeholder='Enter Your Full Name' />
            <input type='email' placeholder='Enter Your Email'/>
            <button className='btn-dark'>Apply as an Intern</button>
        </form>

        <div className='footer-links'>
          <div className='container'>
            <div className='foot-items'>
              <img src={Logo} />
              <p>Get in touch</p>
              <p>+234-907-957-7366</p>
              <p>hello@sidehustle.ng</p>
              <p>support@sidehustle.ng</p>
            </div>

            <div className='foot-items'>
              <h2>Quick Links</h2>
              <p>FAQ</p>
              <p>Hire a Talent</p>
            </div>

            <div className='foot-items'>
              <h2>Company</h2>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>

            <div className='foot-items'>
              <h2>CONNECT WITH US </h2>
              <div className='socials'>
              <FaFacebookSquare />
              <FaInstagram />
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Footer