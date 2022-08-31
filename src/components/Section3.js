import React, { useState } from 'react'
import dashboard  from '../assets/dashboard-mockup.63920a1c.svg';
import { FaAngleRight, FaAngleDown    } from 'react-icons/fa';
import '../styles/Section3.css';

const Section3 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  return (
    <div className='section-3'>
      <div className='content-left'>
        <img src={dashboard} alt="dashboard" width='700' />
      </div>

      <div className='content-right'>
          <h1><span style={{ color: "#52a350" }}>Learn</span> in-demand skills seamlessly</h1>
          <p className='top'>Imagine learning in an environment built to give you the best learning experience.</p>
          <p>A blend of self-paced and instructor-led training with lots of hands-on experience to ensure you are well-rounded in the track of your choice.</p>
      
          <div className='disclose'>
            <button className={click ? 'active' : 'perks' } onClick={handleClick}>Perks <span>{click ? <FaAngleDown /> : <FaAngleRight />}</span></button>
            <div className={click ? 'disclose-info-active' : 'disclose-info'}>
                <ul>
                    <li>Earn a certificate of completion at the end of the Internship</li>
                    <li>A chance to win one million naira grant from Raven Bank</li>
                    <li>A chance to win a special business advisory package with Kentaur Venture Capital sponsorship courtesy, Raven Bank.</li>
                    <li>A chance to build a startup in the Side Hustle bootcamp</li>
                    <li>Boost your portfolio by taking part in capstone projects and creating world class projects in the bootcamp</li>
                </ul>
            </div>
          </div>
          <div className='btn-2'>
                    <button className='btn-dark'>Apply as an Intern</button>
          </div>
      </div>
    </div>
  )
}

export default Section3