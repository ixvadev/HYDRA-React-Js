import React from 'react';
import "./cardsComp.css"

export class Cards extends React.Component{
    render(){
        return(
            <div className='cont-cards'>
                <div className='card'>
                    <div className='cont-img'>
                        <img src = "./images/cards4.png"  alt = "" />
                    </div>
                    <h1>SIMULATION</h1>
                    <hr></hr>
                    <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                    </p>
                    <button className='fillBtn'>Try It Now</button>
                </div>
                <div className='card'>
                    <div className='cont-img'>
                        <img src = "./images/cards2.png"  alt = "" />
                    </div>
                    <h1>EDUCATION</h1>
                    <hr></hr>
                    <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                    </p>
                    <button className='fillBtn'>Try It Now</button>
                </div>
                <div className='card'>
                    <div className='cont-img'>
                        <img src = "./images/cards3.png"  alt = "" />
                    </div>
                    <h1>SELF-CARE</h1>
                    <hr></hr>
                    <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                    </p>
                    <button className='fillBtn'>Try It Now</button>
                </div>
                <div className='card'>
                    <div className='cont-img'>
                        <img src = "./images/cards1.png"  alt = "" />
                    </div>
                    <h1>OUTDOOR</h1>
                    <hr></hr>
                    <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                    </p>
                    <button className='fillBtn'>Try It Now</button>
                </div>
            </div>
        )
    }
}