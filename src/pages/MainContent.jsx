import React, { useState } from 'react';
import '../styles/MainContent.css';
import NavBar from './NavBar';
import image from "../images/I.jpg";
import useLoadingNavigation from '../components/navigationFunc';
import Summary from '../tabs/summary';
import Certificates from '../tabs/certificates';
import Skills from '../tabs/skills';
import Projects from '../tabs/projects';
import Contact from '../tabs/contact';
import Education from '../tabs/education';
function MainContent() {
  const { handleNavigation, LoadingBarComponent } = useLoadingNavigation();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    return setShow(!show);
  }
  return (
    <div>
      <LoadingBarComponent color={"#EEEEEE"} />
      <header className='sticky'>
        <NavBar show={show} click={handleClick} handleNavigation={handleNavigation} />
      </header>

      <main className={show ? 'main active' : 'main'} >
        <div className='head-sec'>
          <span>
            <img src={image} alt="me" />
          </span>
          <h1>Kuljeet Singh</h1>
        </div>
        <body className="bodyContent" >
          <Summary />
          <Certificates />
          <Skills />
          <Projects />
          <Education />
        </body>
        <Contact />
      </main></div>
  );
}
export default MainContent;