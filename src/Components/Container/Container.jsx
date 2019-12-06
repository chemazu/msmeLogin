import React from 'react';
import './Container.css'
import Logo from '../Logo/Logo';
import Auth from '../Auth/Auth';
import Button from '../Button/Button';

export default function Container() {
    return (
        <div className='container'>
            <div className='leftWrapper'>
                <Logo className='logo'/>
                <div className='welcomeText'>
                    <h2>Welcome to MSME Clinics Portal</h2>
                    <p>Kindly login with your MSME credentials to continue </p>
                </div>
                <div className='auth'>
                <Auth type='Email' unique='Address'/>
                <Auth type= 'Password'/>
                <div className= 'forgotAuth'>
                    <input type ='checkbox'/> 
                    <span className='checkmark'></span>
                    <span style={{marginRight: "100px", paddingLeft:'30px'}}>Remember me</span>
                    <a href="#"><span>Forgot password</span></a>
                </div>
                </div>
                <div className='button'>
                    <Button/>
                </div>
            </div>
            <div className='rightWrapper'></div> 
        </div>
    )
}
