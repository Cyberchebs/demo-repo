import React from 'react'
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images  from '../../constants/images';



const Navbar = () => {
  
  
  return (

  
    <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app logo" />
        </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#menu">Menu</a></li>
          <li className='p__opensans'><a href="#awards">Awards</a></li>
          <li className='p__opensans'><a href="#contact">Contacts</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className='p__opensans'>Login / Register</a>
          <div />
          <a href="/" className='p__opensans'>Book Table</a>
        </div>
        <div className="app__navbar-smallscreen">
          
          

           <div className='app__navbar-snmallscreen_overlay flex__center slide-bottom'>
               
               
                
                <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#menu">Menu</a></li>
          <li className='p__opensans'><a href="#awards">Awards</a></li>
          <li className='p__opensans'><a href="#contact">Contacts</a></li>
        </ul>
           </div>
          
        </div>
    </nav>
  )
};


export default Navbar