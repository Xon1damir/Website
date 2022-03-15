import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends React.Component{
    constructor(props){
        super(props)
        
    }
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    
    
    render(){
        return(
            <div style={{ height: '300px', width: '530px' , marginTop:"60px", marginBottom:"16px", marginLeft:"16px", marginRight:"16px"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        )
    }
}


export default Map





