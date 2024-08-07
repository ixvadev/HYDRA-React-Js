import React from 'react';
import "./Footer.css";


export class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer-cont'>
                    <div className='logo'>
                        <img src= "./images/logoS.svg" alt = "" />
                    </div>
                    <div className='links'>
                        <a href= "#" alt = "">About</a>
                        <a href= "#" alt = "">Services</a>
                        <a href= "#" alt = "">Technology</a>
                        <a href= "#" alt = "">How To</a>
                    </div>
                    <div className='links'>
                        <a href= "#" alt = "">FAQ</a>
                        <a href= "#" alt = "">SITEMAP</a>
                        <a href= "#" alt = "">CONDITIONS</a>
                        <a href= "#" alt = "">LICENSES</a>
                    </div>
                    <div className='icons'>
                        <h1>SOCIALIZE WITH HYDRA</h1>
                        <div className='social'>
                            <img src='./images/facebook.svg' alt=''/>
                            <img src='./images/instagram.svg' alt=''/>
                            <img src='./images/twitter.svg' alt=''/>
                            <img src='./images/pinterest.svg' alt=''/>
                        </div>
                        <button className='btn'>BUILD YOUR WORLD</button>
                    </div>
                    <div className='footer-shape'>
                        <img src='./images/footerShape.svg' alt='' />
                    </div>
                </div>
                <hr/>
                <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
            </footer>
        )
    }
}