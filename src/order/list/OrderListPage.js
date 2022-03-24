import React from "react";
import Sidebar from "./components/Sidebar";
import Right from "./Right";
import './Order.css'
class OrderListPage extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){
        return(
            <div>
                <div className="div">
                    <Sidebar/>  
                    <Right/>  
                </div>
            </div>
        )
    }
}


export default OrderListPage