import React from 'react';
import Input from '../input/input'
import './authorization.scss'
import '../navbar/navbar.scss'
import {NavLink} from 'react-router-dom'

const Registration = () => {
    return (
        <div className={'auth-card'}>
            <div className={'auth-card-title'}>Registration</div>
            <Input type={'email'} placeholder={'Type your email...'}/>
            <Input type={'password'} placeholder={'Type your password...'}/>
            <Input type={'password'} placeholder={'Confirm your password...'}/>
            <div className={'auth-card-btns'}>
                <button>Registration</button> <span>or if you have account</span>
                <button><NavLink className={'auth-card-btn'} to={'/login'}>Login</NavLink></button>
            </div>
        </div>
    );
};

export default Registration;