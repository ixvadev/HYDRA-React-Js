import React from "react";
import "./TwoComp.css";

export class TwoComp extends React.Component{
    render(){
        return(
            <div className="cont-main">
                <div className="img-cont">
                    <img src="./images/componentTwo_img.png" alt="" />
                </div>
                <div className="textTwo">
                    <h1>ABOUT</h1>
                    <h4>HYDRA VR</h4>
                    <p>
                    Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                    urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                    dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                    Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                    sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                    etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                    cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                    retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                    </p>
                    <button className="filledBtn">LET'S GET IN TOUCH</button>
                </div>
                <div className="shape-cont">
                    <img src="./images/componentTwoShape.svg" alt="" />
                </div>
                    
            </div>
        )
    }
}
