import React, { useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const MapLandings = () => {

  useEffect(
    () => { getLandings() },
    []
  );

  const getLandings = () => {
    const res = axios.get('/api/astronomy/landings');
    const landingsData = res.data;
    console.log(landingsData);
  }


  return (
    <div id="map">
      <MapContainer
        center={{ lat: 31.505, lng: -0.09 }}
        zoom={2}
        style={{ height: "50vh", width: "100%" }}
        scrollWheelZoom={true}>
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
