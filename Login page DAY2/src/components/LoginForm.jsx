import React, {useState} from 'react';
import '../assets/css/Form.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const[email,emailupdate]=useState('');
    const[password,passwordupdate]=useState('');

    const navigate = useNavigate();

    const checkEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const checkPassword = (password) => {
       return password.length>=8 && password.length<=15;
    }

    const handleSubmit = async (event) => {
       event.preventDefault();
       if(!checkEmail(email)) {
       alert('Email is invalid');
       return;
       }
       if(!checkPassword(password)) {
       alert('password is invalid');
       return;
       }
       navigate('/home');
    }
    return (
        <div className='form__container'>
            <div className="form-container2">
            <form className='register__form' method='POST'onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={e=>emailupdate(e.target.value)} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password"  value={password} onChange={e=>passwordupdate(e.target.value)} />
                </div>
                <button className='submit__btn' type="submit">Login</button>
                <p>New user?<span><Link style={{ textDecoration: 'none', marginLeft: '3px' }} to={`/register`}>Register here</Link></span></p>
            </form>
            </div>
        </div>
    )
}

export default LoginForm;