import React from 'react';
import './navbar.scss'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <div className={'logo'}>
                <div className={'logo_title'}>Cloud storage</div>
            </div>
            <div className={'navbar_btn'}>
                <NavLink to={'/login'} className={'navbar_auth'}>Login</NavLink>
                <NavLink to={'/registration'} className={'navbar_auth'}>Registration</NavLink>
            </div>
        </div>
    );
};

export default Navbar;