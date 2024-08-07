import React from 'react';
import './ReusedComp.css';

export  class ReusedComp extends React.Component {
    
    props = {
        title:"",
        subTitle:"",
        paragraph:""
    }
    render(){
        return (
            <div className='cont-reuse'>
                <div className='left'>
                    <h1>{this.props.title}</h1>
                    <h4>{this.props.subTitle} 
                    <img src = "./images/longArrow.svg" alt=''/>
                    </h4>
                </div>
                <div className='right'>
                    <p>
                    {this.props.paragraph}
                    </p>
                </div>
            </div>
        )
    }
}