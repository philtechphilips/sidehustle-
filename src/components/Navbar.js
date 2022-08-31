import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/side-hustle-logo.b504d49a.svg';

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='container'>
             <div className='navbar-row'>
             <div className='logo'>
                <img src={Logo} width='120' />
             </div>

             <div className='nav-links'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href='#'>FAQs</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>For Employers</a>
                    </li>
                </ul>
             </div>

             <div className='nav-buttons'>
                <div className='btn-1'>
                    <button className='btn-light'>Login</button>
                </div>
                <div className='btn-2'>
                    <button className='btn-dark'>Learn For Free</button>
                </div>
             </div>
             </div>
            </div>
        </div>
    </>
  )
}

export default Navbar