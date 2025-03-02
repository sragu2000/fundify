import React from 'react'
import { Link } from 'react-router-dom'
import { DashBoardNavConfig } from './NavBarConfig'
import "./NavBar.css"
import { Assets } from '../../../assets/Assets'
const NavBar = () => {
    return (
        <nav className='db-nav-container'>
            <div className='db-nav-content'>
                <img src={Assets.logo} alt="logo" className='db-nav-logo' />
                <div className='db-nav-links'>
                    <ul>
                        {
                            DashBoardNavConfig.map((config, index) => {
                                return (
                                    <li>
                                        <Link to={config.path}>{config.label}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link></Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar