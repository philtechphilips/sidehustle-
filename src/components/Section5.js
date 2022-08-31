import React from 'react'
import '../styles/Section5.css';
import Sprut from '../assets/spurt.800bd818 (1).svg';
import EntryLevel from '../assets/reina.8230ab87.svg';
import Marquee from 'react-fast-marquee';
const Section5 = () => {
  return (
    <>
        <div className='section5'>
            <h2 className='heading'>We’ve got our footprint</h2>

            <div className='marquee'>
                <Marquee direction='right' gradient={false} speed='60'>
                <img src={Sprut}  width='100'/>
                <img src={Sprut}  width='100' />
                <img src={Sprut}  width='100' />
                <img src={Sprut}  width='100' />
                <img src={Sprut}  width='100' />
                <img src={Sprut}  width='100' />
                <img src={Sprut}  width='100' />
                <img src={Sprut}  width='100' />
                </Marquee>
            </div>
        </div>
    </>
  )
}

export default Section5