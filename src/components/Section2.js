import React from 'react';
import { FaAward } from 'react-icons/fa';
import '../styles/Section2.css';

const Section2 = () => {
  return (
    <div className='section-2'>
        <div className='container'>
            <div className='left'>
                <h1>What you stand to <span style={{ color: "#52a350" }}>gain</span></h1>
                <p>Since 2020, Side Hustle has trained over 350 thousand African youths in various fields across Engineering, Marketing, Product and Design.</p>
                <div className='btn-2'>
                    <button className='btn-dark'>Learn for FREE</button>
                </div>
            </div>


            <div className='right'>
                <div className='content'>
                    <FaAward  className='icon'/>
                    <h6>Earn 2 certificates</h6>
                    <p>All Side Hustle Internship finalists will be awarded a paid certificate of completion at the end of the Internship and a free soft skills certificate from Jobberman</p>
                </div>

                <div className='content'>
                    <FaAward className='icon' />
                    <h6>Earn 2 certificates</h6>
                    <p>All Side Hustle Internship finalists will be awarded a paid certificate of completion at the end of the Internship and a free soft skills certificate from Jobberman</p>
                </div>

                <div className='content'>
                    <FaAward className='icon' />
                    <h6>Earn 2 certificates</h6>
                    <p>All Side Hustle Internship finalists will be awarded a paid certificate of completion at the end of the Internship and a free soft skills certificate from Jobberman</p>
                </div>

                <div className='content'>
                    <FaAward className='icon' />
                    <h6>Earn 2 certificates</h6>
                    <p>All Side Hustle Internship finalists will be awarded a paid certificate of completion at the end of the Internship and a free soft skills certificate from Jobberman</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Section2