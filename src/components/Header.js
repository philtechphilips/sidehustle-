import React from 'react';
import '../styles/Header.css';
import headerImg from '../assets/hero-image.547f1c98.png';
import jobberman from '../assets/jobberman.svg';
import raven from '../assets/raven.svg';
import thire from '../assets/thire.svg';

const Header = () => {
  return (
    <div className='header'>
            <div className='ad'>
                <p>
                Registration for the Side Hustle Internship 6.0 Is Now Open
                </p>
            </div>
        <div className='container'>
          <div className='left'>
            <h1>Gain in-demand skills for <span style={{ color: "#52a350" }}>free</span></h1>
            <p>Join the Side Hustle Internship to learn and get the hands-on experience needed. Our interns are ready to take on entry-level and junior positions in just 8 weeks.</p>
            <div className='btn-2'>
                    <button className='btn-dark'>Apply as an Intern</button>
            </div>

            <div className='bottom-image'>
                <img src={jobberman} alt="jobberman" width="80"/>
                <img src={raven} alt="raven" width="80" />
                <img src={thire} alt="thire" width="80" />
            </div>
          </div>


          <div className='right'>
            <img src={headerImg}  alt='Hero Image' />
            <p><span className='dot'></span>Over 300 thousand young Africans have started their journey into tech with us</p>

            <div className='bottom-image'>
                
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header