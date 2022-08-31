import React from 'react'
import image from '../assets/RuthSoren.png';
const Marquees = () => {
  return (
    <>
        <div className='marque'>
            <q>Side Hustle was a fantastic opportunity to enroll in an internship for me. Our Mentors and organizers were incredible and hardworking. Thanks to this internship, I am on the verge of having a real-life project in my portfolio. I've also learned the fundamentals of WordPress, from creating an outstanding blog to an E-commerce web store with the Elementor page builder. Thank you for this wonderful opportunity, Side Hustle. </q>
            <div className='marquee-bottom'>
                <img src={image}/>
                <div className='details'>
                    <h4>Blesing Soren</h4>
                    <p>Side Hustle Internship 4.0</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Marquees