import React from 'react';
import '../authorization/authorization.scss'

const Input = ({type, placeholder, value}) => {
    return (
        <div className={'input'}>
            <input type={type} placeholder={placeholder} value={value}/>
        </div>
    );
};

export default Input;