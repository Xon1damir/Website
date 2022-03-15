import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './tableBottom.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
class TableBottom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Table-Bottom">
                <div className="Button-Container">
                    <button className="Default-Button">
                        <FontAwesomeIcon icon={faArrowLeft} className="Text-2" />
                    </button>
                    <button className="Onclick-Button">
                        <h1 className="Text-1">1</h1>
                    </button>
                    <button className="Default-Button">
                        <h1 className="Text-2">2</h1>
                    </button>
                    <button className="Default-Button">
                        <h1 className="Text-2">3</h1>  
                    </button>
                    <button className="Default-Button">
                        <h1 className="Text-2">4</h1>
                    </button>
                    <button className="Default-Button">
                        <h1 className="Text-2">5</h1>
                    </button>
                    <button className="Default-Button">
                        <h1 className="Text-2">...</h1>
                    </button>
                    <button className="Default-Button">
                        <h1 className="Text-2">86</h1>
                    </button>
                    <button className="Default-Button">
                        <FontAwesomeIcon icon={faArrowRight} className="Text-2" />
                    </button>
                </div>
            </div>
        )
    }
}

export default TableBottom