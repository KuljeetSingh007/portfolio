import { RiMenu5Fill } from "react-icons/ri";
import React from 'react';
import '../styles/NavBar.css';
import { Link as ScrollLink } from 'react-scroll';
import WhiteDemonLogo from '../images/whitedemon.png';
import { Link } from 'react-router-dom';

function NavBar(props) {

  return (
    <nav className={props.show ? "active-nav navbar" : "navbar"}>
      <div onClick={props.click} className={"menuBtn"}> <RiMenu5Fill /></div>
      <div> <RiMenu5Fill /></div>
      <ul className={"nav-links"}>
        <li><Link onClick={() => props.handleNavigation('/main')} className='links'>Home</Link></li>
        <li><ScrollLink to="main" smooth={true} duration={500} className='links'>About</ScrollLink></li>
        <li><ScrollLink to="summary" smooth={true} duration={500} className='links'>Summary</ScrollLink></li>
        <li><ScrollLink to="certificates" smooth={true} duration={500} className='links'>Certificates</ScrollLink></li>
        <li><ScrollLink to="skills" smooth={true} duration={500} className='links'>Skills</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500} className='links'>Projects</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} className='links'>Contact</ScrollLink></li>
        {/* <li><Link onClick={() => props.handleNavigation('/api')} className='links'>ApiPage</Link></li> */}
      </ul>
      <div className='right-elements'>
        <a href="#ghost" className="ghost">Devil</a>
        <img className="demon" src={WhiteDemonLogo} alt="White Demon Logo" />
      </div>
    </nav >
  );
}

export default NavBar;
