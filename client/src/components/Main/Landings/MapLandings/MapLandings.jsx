import React from "react";
import 'leaflet/dist/leaflet.css';
/* import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'; */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const MapLandings = () => {


  return (
    <div id="map">
      <MapContainer
        center={{ lat: 31.505, lng: -0.09 }}
        zoom={2}
        style={{ height: "50vh", width: "100%" }}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[31.505, -0.09]}>
          <Popup>
            <span>test</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapLandings;
