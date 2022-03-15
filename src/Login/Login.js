import React from "react";
import Logo from './images/Logo.png' 
import Input from "./input";

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="left" >
                    <h1 className="bootcamp" >Bootcamp</h1>
                    <img src={Logo}  alt="Logo" className="img" />
                </div>
                <Input/>
            </div>
        )
    }
}

export default Login