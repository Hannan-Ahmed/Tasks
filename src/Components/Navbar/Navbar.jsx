import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { createUseStyles } from 'react-jss';
import icon from "../Images/icon.png"


function Navbar() {

  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <>
      <nav className={`top_nav  ${show && 'top_nav__blue'}`}  >
        <span id='nav_title'>
          <strong> More signle, less noise</strong>
        </span>

        <span id='upgrade_btn'>
          UPGRADE AND SAVE 30%
        </span>
      </nav>

      <aside className='left_nav'>
        <span><img src={icon} style={{ paddingTop: 10, height: 50, width: 40 }} alt="" /></span>
      </aside>
    </>
  )
}

export default Navbar
