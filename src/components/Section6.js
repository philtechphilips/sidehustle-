import React from 'react';
import Internship from '../assets/product-bootcamp.bdb74b59.svg';
import Tag from '../assets/free-tag.0d1885db.svg';
import '../styles/Section6.css';

const Section6 = () => {
  return (
    <>
        <div className='container'>
            <div className='intership'>
                <div className='card'>
                    <img className='intern' src={Internship} />
                    <h1>Internship</h1>
                    <p>Learn soft & hard skills in 4 weeks</p>
                    {/* <img src={Tag}/> */}
                </div>

                <div className='card'>
                    <img className='intern' src={Internship} />
                    <h1>Certification</h1>
                    <p>Get 2 certificates. 1 paid certificate of completion from Side Hustle and a free soft skills certificate from Jobberman.</p>
                    {/* <img src={Tag}/> */}
                </div>

                <div className='card'>
                    <img className='intern' src={Internship} />
                    <h1>Bootcamp</h1>
                    <p>Join a team of brilliant minds to build a startup, a strong portfolio and world class products.</p>
                    {/* <img className='tag' src={Tag}/> */}
                </div>

            </div>
        </div>
    </>
  )
}

export default Section6