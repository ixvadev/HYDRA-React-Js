import React from 'react';
import "./Header.css";
// import {navLogo} from '../../public/images';



export const Header = () => {
    return (
    <div className='Header'>
        <div className='logo'>
            <img src="./images/navLogo.svg" alt="" />
        </div>
        <ul>
            <li>
                <a className='link' to={'#'}>About</a>
            </li>
            <li>
                <a className='link' to={'#'}>Services</a>
            </li>
            <li>
                <a className='link' to={'#'}>Technology</a>
            </li>
            
        </ul>
        <div className='cont-button'>
            <button className='unfilledBtn'>CONTACT US</button>
            <button className='filledBtn'>JOIN HYDRA</button>
        </div>
    </div>
)
}
