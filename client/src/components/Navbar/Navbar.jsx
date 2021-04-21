import React from 'react';
import { StyledNav } from './StyledNav.jsx';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <StyledNav>
            <div className='container'>
                <div className='title'>
                    <p>PI-Dogs - Santiago Molina</p>
                </div>
                <div className='social-media'>
                    <a href="https://www.linkedin.com/in/santiago-molina-dev/" target='_blank' rel='noopener noreferrer' ><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/SantiagoMartinMolina" target='_blank' rel='noopener noreferrer' ><i class="fab fa-github-square"></i></a>
                    <a href="https://twitter.com/santidev7" target='_blank' rel='noopener noreferrer' ><i class="fab fa-twitter-square"></i></a>
                </div>
                <div>
                    <ul className="list">
                        <li className="list-item">
                            <NavLink exact to="/home" >Home</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/createBreed" >Create breed</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/about" >About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNav>
    )
}