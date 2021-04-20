import React from 'react';
import { StyledNav } from './StyledNav.jsx';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <StyledNav>
            <div className='container'>
                <div className='title'>
                    <p>Proyecto individual - Santiago Molina</p>
                </div>
                <div>
                    <ul className="list">
                        <li className="list-item">
                            <NavLink exact to="/home" >Home</NavLink>
                            <NavLink exact to="/createBreed" >Crear raza nueva</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNav>
    )
}