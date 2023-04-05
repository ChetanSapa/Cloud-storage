import React from 'react';
import '../../styles/navbar.scss'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../reducers/userReducer'

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <div className={'navbar'}>
            <div className={'logo'}>
                <div className={'logo_title'}>Simple Cloud Storage</div>
            </div>
            <div className={'navbar_btn'}>
                {!isAuth && <NavLink to={'/login'} className={'navbar_auth'}>Login</NavLink>}
                {!isAuth && <NavLink to={'/registration'} className={'navbar_auth'}>Registration</NavLink>}
                {isAuth && <a href={''} className={'navbar_auth'} onClick={()=>dispatch(logout())}>Logout</a>}
            </div>
        </div>
    );
};

export default Navbar;