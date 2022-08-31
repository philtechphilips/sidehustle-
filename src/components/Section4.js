import React from 'react'
import Marquee from 'react-fast-marquee';
import image from '../assets/RuthSoren.png';
import '../styles/Section4.css';
import Marquees from './Marquee';
const Section4 = () => {
  return (
    <div className='section4'>
        <div className='marquee-intro'>
            <h1>What others have <span style={{ color: "#52a350" }}>gained</span></h1>
            <p>Read all about how the Side Hustle internship has impacted other youths and helped them achieve their goals.</p>
        </div>
        
            <Marquee pauseOnHover='true' gradient={false} speed={50}>
            <div className='marquee-container'>
                <Marquees />
                <Marquees />
                <Marquees />
            </div>
            </Marquee>
        </div>
  )
}

export default Section4