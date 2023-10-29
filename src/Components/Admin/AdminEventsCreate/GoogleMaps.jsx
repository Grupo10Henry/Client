// Luis
import React from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const GoogleMaps = () => {
    const mapStyles = {
      height: '400px',
      width: '100%',
    };
  
    const center = {
      lat: 0,
      lng: 0,
    };
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyAk33OybgLEOTfTfB-mWeon3pWcGLHS3vY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default GoogleMaps;