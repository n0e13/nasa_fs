import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { API_LANDING_URI } from "../../../../../constants/constants";

const MapLandings = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const [landings, setLandings] = useState([]);
  const [newURI, setNewURI] = useState('');


  useEffect(
    () => {
      (async () => {
        try {
          const response = await axios.get(`${API_LANDING_URI}${newURI}`);
          const data = await response.data;
          setLandings([...data]);
          setIsSearching(false);
          setNewURI('');
        } catch (error) {
          setIsSearching(false);
        }
      })();
    }, [newURI]
  )

  const paintMarkers = () => {
    return landings.map(
      landing => {
        if (landing.geolocation) {
          const lat = landing.geolocation.latitude;
          const lon = landing.geolocation.longitude;
          return (
            <Marker
              position={[lat, lon]}
              key={uuidv4()}
            >
              <Popup>
                <>
                  <p>Name: {landing.name}</p>
                  <p>Class: {landing.recclass}</p>
                  <p>Mass: {landing.mass}g</p>
                </>
              </Popup>
            </Marker>
          );
        }
      }
    );
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
        {isSearching ? '' : paintMarkers()}
      </MapContainer>
    </div>
  );
}

export default MapLandings;
