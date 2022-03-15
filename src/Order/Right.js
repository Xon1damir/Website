import React from "react";
import Header from "./header";
import TableContainer from "./tableContainer";

class Right extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <React.Fragment>
                <Header/>
                <TableContainer/>
            </React.Fragment>
        )
    }
}

export default Right