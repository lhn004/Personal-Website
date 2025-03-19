import React, { useEffect, useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png'
import { Link } from "react-router-dom"
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
            console.log("Scroll position:", window.scrollY, "Sticky:", window.scrollY > 50);
        })
    },[])

    return (
        <nav className={`${sticky? 'dark-nav' : ''}`}>
            <div className='desktopMenu'>
                <Link to='/' className="desktopMenuListItem" aria-label="Go to Home Page">Home</Link>
                <Link to='/about' className="desktopMenuListItem" aria-label="Go to About Page">About</Link>
                <Link to='/portfolio' className="desktopMenuListItem" aria-label="Go to Portfolio Page">Portfolio</Link> 
                {/* <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link> */}
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt= "" className='desktopMenuImg'/>
                Contact Me   
            </button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} aria-hidden="true"/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link to='/' className="listItem" aria-label="Go to Home Page" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link to='/about' className="listItem" aria-label="Go to About Page" onClick={()=>setShowMenu(false)}>About</Link>
                <Link to='/portfolio' className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link to='/' className="listItem" aria-label="Go to Portfolio Page" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;