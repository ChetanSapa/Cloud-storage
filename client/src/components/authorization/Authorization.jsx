import React from 'react';
import Input from '../input/input'
import './authorization.scss'
import '../navbar/navbar.scss'
import {NavLink} from 'react-router-dom'

const Authorization = () => {
    return (
        <div className={'auth-card'}>
            <div className={'auth-card-title'}>Login</div>
            <Input type={'email'} placeholder={'Type your email...'}/>
            <Input type={'password'} placeholder={'Type your password...'}/>
            <div className={'auth-card-btns'}>
                <button>Login</button> Don't have an account?
                <button><NavLink className={'auth-card-btn'} to={'/registration'}>Registration</NavLink></button>
            </div>
        </div>
    );
};

export default Authorization;