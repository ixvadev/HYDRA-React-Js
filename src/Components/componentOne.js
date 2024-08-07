import React from 'react';
import "./componentOne.css";

export  function ComponentOne() {
    return (
    <div className='cont-componentOne'>
        <div className='left-side-comp'>

            <h1 className='heading'>
            <h1>
                <span>Dive</span> Into The Depths Of
            </h1>
	        <span> Virtual Reality</span>
            </h1>

            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                nisl tincidunt eget. Lectus mauris eros in vitae .
            </p>

            <div className='cont-button-arrow'>
                <button className='unfilledBtn'>BUILD YOUR WORLD </button>
                <img className='arrow' src='./images/shortArrow.svg' alt=''/>
            </div>

        </div>
        <div className='right-side-comp'>
            <div className='img-cont'>
                <img  src='./images/componentOne_img.png' alt=''/>
            </div>
                <img className='shape' src='./images/componentOneShape.svg' alt=''/>
            
            
        </div>
    </div>
)
}
