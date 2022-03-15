import React from "react";
import Left from "./Left";
import Right from "./Right";
import './Order.css'
class Order extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){
        return(
            <div>
                <div className="div" >
                    <Left/>  
                    <Right/>  
                </div>
            </div>
        )
    }
}


export default Order