import React,{Component} from 'react'
//AIzaSyD6ps1HQ9K7o_ZZrUEDAO0AGoGuN8Nf1v4   ;

import { Map,GoogleApiWrapper,Marker } from 'google-maps-react'

const mapstyles={
   width:"40%",
   height:"300px"

}
class Mapuniver extends Component{
 render(){
    const coordonne ={lat:12.019643921059137,lng:15.112754643519175}; 
    return(
        <Map google={this.props.google}
        zoom={14}
        style={mapstyles}
        initialCenter={coordonne}
        center={coordonne}>
<Marker position={coordonne}/>
        </Map>
    )
 }

}

export default GoogleApiWrapper({apikey:"AIzaSyD6ps1HQ9K7o_ZZrUEDAO0AGoGuN8Nf1v4"})(Mapuniver)
