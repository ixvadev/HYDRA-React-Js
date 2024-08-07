import React from 'react'
import "./NumbComp.css";

export  class NumbComp extends React.Component {
    props = {
        num:"" ,
        text:""
    }
    render(){
        return (
            <div className='cont'>
                <div className='num'>
                    <h1>{this.props.num}</h1>
                </div>
                <div className='arrow'>
                    <img src= "./images/shortArrow.svg" alt= ""/> <h1>{this.props.text}</h1>
                </div>
            </div>
        )
    }
}
