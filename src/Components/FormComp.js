import React from "react";
import "./FormComp.css";

export class FormComp extends React.Component{
    render(){
        return(
            <div className="form">
                    <div className="one">
                        <div className="inputOne">
                            <input type={Text} placeholder = "First Name"/>
                            <input type={Text} placeholder = "Last Name" />
                        </div>
                        <div className="inputOne">
                            <input type= "text"  placeholder = "First Name"/>
                            <input type= "text" placeholder = "Last Name" />
                        </div>
                        <div className="two">
                            <input type= "text" placeholder = "Last Name" />
                        </div>
                        <div className="three">
                            <input id="box" type= "text" placeholder = "Your Message" />
                        </div>
                    </div>


                    <div className="btn">
                        <input id="fillBtn" type= "button" value= "Send" />
                    </div>
            </div>
        )
    }
}