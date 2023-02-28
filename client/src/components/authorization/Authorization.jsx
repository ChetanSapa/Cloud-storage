import React, {useState} from 'react';
import Input from '../input/input'
import './authorization.scss'
import '../navbar/navbar.scss'
import {NavLink} from 'react-router-dom'

const Authorization = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={'auth-card'}>
            <div className={'auth-card-title'}>Login</div>
            <Input value={email} setValue={setEmail} type={'email'} placeholder={'Type your email...'}/>
            <Input value={password} setValue={setPassword} type={'password'} placeholder={'Type your password...'}/>
            <div className={'auth-card-btns'}>
                <button>Login</button> Don't have an account?
                <button><NavLink className={'auth-card-btn'} to={'/registration'}>Registration</NavLink></button>
            </div>
        </div>
    );
};

export default Authorization;