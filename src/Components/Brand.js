import React from 'react';
import './Brand.css';

export class Brand extends React.Component{
    render(){
        return(
            <div className='cont-main-brand'>
                <div className='top'>
                    <div className='cont-img'>
                        <img src="./images/vrImg.png" alt=""/>
                    </div>
                    <div className='textBrand'>
                        <h1>TECHNOLOGIES & HARDWARE</h1>
                        <p>USED BY HYDRA VR.</p>
                    </div>
                    <div className='down'>
                        <img src= "./images/down.svg" alt= ""/>
                    </div>
                </div>
                <div className='bottom'>
                    
                    <div className='icon'>
                        <img src= "./images/vive.svg" alt= ""/>
                    </div>

                    <div className='icon'>
                        <img src= "./images/oracle.svg" alt= ""/>
                    </div>

                    <div className='icon'>
                        <img src= "./images/unity.svg" alt= ""/>
                    </div>

                    <div className='icon'>
                        <img src= "./images/unrealEngine.svg" alt= ""/>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}