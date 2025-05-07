import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
import logo from '../assets/Straw Hat Logo.png';
import Button from './Button';
function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/articles'>Members</Link>
                </li>
            </ul>
            <Button>Login</Button>
        </nav>
    )
}
 
export default Navbar