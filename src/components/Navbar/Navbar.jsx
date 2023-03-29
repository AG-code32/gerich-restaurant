import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { images } from '../../constants';
// import gericht from '../../assets/gericht.png';

import './Navbar.css';

function Navbar() {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToogleMenu(true)} />

        {toogleMenu && (

        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToogleMenu(false)} />
          <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href="#home" onClick={() => setToogleMenu(false)}>Home</a></li>
            <li className='p__opensans'><a href="#about" onClick={() => setToogleMenu(false)}>About</a></li>
            <li className='p__opensans'><a href="#menu" onClick={() => setToogleMenu(false)}>Menu</a></li>
            <li className='p__opensans'><a href="#awards" onClick={() => setToogleMenu(false)}>Awards</a></li>
            <li className='p__opensans'><a href="#contact" onClick={() => setToogleMenu(false)}>Contact</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar