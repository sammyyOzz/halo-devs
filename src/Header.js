import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import NavDrawer from './NavDrawer'


function Header() {
    return (
        <div className="header">
            <NavLink to="/" style={{textDecoration: 'none'}}>
                <div className="header__logo">
                    <span>Hal</span>
                    <span style={{color: 'yellow'}}>o</span>
                </div>
            </NavLink>

            <div className="header__nav">
                <NavLink exact to="/" className="header__link" activeStyle={{ color: ' #C9D500' }}>
                    Home
                </NavLink>
                <NavLink to="/about" className="header__link" activeStyle={{ color: ' #C9D500' }}>
                    About
                </NavLink>
            </div>

            <div className="header__right">

                <div className="header__mobileMenuIcon">
                    <NavDrawer />
                </div>

            </div>

        </div>
    )
}

export default Header
