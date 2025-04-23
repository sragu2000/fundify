import React from 'react'
import { Link } from 'react-router-dom'
import { DashBoardNavConfig } from './NavBarConfig'
import "./NavBar.css"
import { Assets } from '../../../assets/Assets';
import { IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
const NavBar = () => {
    return (
        <nav className='db-nav-container'>
            <div className='db-nav-content'>
                <div className="logo-container">
                    <Link to="/" className="logo-link">
                        <img src={Assets.logo} alt="Bio World Logo" className="logo-image" />
                        <h3 className="logo-text">Fundify</h3>
                    </Link>
                </div>
                <div className='db-nav-links'>
                    <ul>
                        <li className='db-nav-icons'><IoMdSettings /></li>
                        <li className='db-nav-icons'><IoNotifications /></li>
                        <li><img src={""} alt="Bio World Logo" className="logo-image" /></li>
                    </ul>
                    <Link></Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar