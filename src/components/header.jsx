import { useState } from "react";
import logo from '../photos/logo.png'
import { Link } from "react-router-dom";
import '../css/header.css'

export const Header = () => {
    const [click, setclick] = useState('')
    const toggle = () => click === ''? setclick('active'): setclick('')
    
    return (    
    <header>
        <div className="logo"><Link to='/'><img src={ logo } alt="" /></Link></div>
        <nav className={`navbar ${ click }`}>
            <ul className="links">
                <li><Link to='/tours'>Tours</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
        <div className="burger" onClick={ toggle.bind() }>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
        </div>
    </header>
    )
}