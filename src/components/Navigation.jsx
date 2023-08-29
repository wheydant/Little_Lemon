import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Constants/icons_assets/Logo.svg';


function Navigation(){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return(
      <nav className={`navbar ${menuOpen ? "open":""}`}>
        <a href='/'>
            <img src={Logo} alt='Logo' className='logo'/>
        </a>
        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "visible":""}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
    );
}

export default Navigation;