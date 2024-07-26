import React, { useState } from 'react';
import '../assets/css/Form.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const [username, usernameUpdate] = useState('');
    const [email, emailUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const navigate = useNavigate();

    const checkEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const checkPassword = (password) => {
       return password.length>=8 && password.length<=15;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(username=='')
        {
            alert('Username is null');
            return;
        }
        if (!checkEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!checkPassword(password)) {
            alert('Password is invalid');
            return;
        }
        navigate('/login');
    }

    return (
        <div className='form__container'>
            <div className="form-container2">
                <form className='register__form' method='POST' onSubmit={handleSubmit}>
                    <div className="input__fields">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value={username}  onChange={e => usernameUpdate(e.target.value)} />
                    </div>
                    <div className="input__fields">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={email} onChange={e => emailUpdate(e.target.value)} />
                    </div>
                    <div className="input__fields">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password" value={password}  onChange={e => passwordUpdate(e.target.value)} />
                    </div>
                    <button className='submit__btn' type="submit">Register</button>
                    <p>Existing user?<span><Link style={{ textDecoration: 'none', marginLeft: '3px' }} to={`/login`}>Login here</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;
