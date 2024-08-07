import React from 'react';
import './IconComp.css';

export class IconComp extends React.Component {
    render(){
        return (
            <div className='main-cont'>
                <div className='part1'>
        
                    <div className='icon'>
                        <img src='./images/location.svg' alt='' />
                    </div>
        
                    <div className='text'>
                        <h1>Pay Us a Visit</h1>
                        <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
        
                </div>
                <div className='part1 after'>
        
                    <div className='icon'>
                        <img src='./images/call.svg' alt='' />
                    </div>
        
                    <div className='text'>
                        <h1>Give Us a Call</h1>
                        <p>(110) 1111-1010</p>
                    </div>
        
                </div>
                <div className='part1'>
        
                    <div className='icon'>
                        <img src='./images/email..svg' alt='' />
                    </div>
        
                    <div className='text'>
                        <h1>Send Us a Message</h1>
                        <p>Contact@HydraVTech.com</p>
                    </div>
        
                </div>
            </div>
        )
    }
}

