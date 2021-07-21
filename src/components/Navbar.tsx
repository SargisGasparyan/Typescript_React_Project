import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar:React.FunctionComponent=()=>{
    return(
        <nav className="purple lighten-4">
            <div className="nav-wrapper ">
            <a href="#" className="brand-logo">React-Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="deep-purple pad">
                    <NavLink to="/" className="a1" exact >List</NavLink>
                </li>
                <li>
                    <NavLink to='/about' href="badges.html">Info</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    )
}