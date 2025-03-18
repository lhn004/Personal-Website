import React, { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png'
import { BrowserRouter, Route, Link } from "react-router-dom"
import menu from '../../assets/menu.png';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <div className='desktopMenu'>
                <Link activeClass='active' to='/' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='/about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='/portfolio' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link> 
                {/* <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link> */}
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt= "" className='desktopMenuImg'/>
                Contact Me   
            </button>
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='/' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='/about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='/portfolio' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='/' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;