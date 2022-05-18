import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {
  API_LANDING_URI,
  LANDING_MIN_MASS,
  LANDING_MASS,
  LANDING_CLASS,
  LANDING_BETWEEN_YEARS,
  LANDING_FROM_YEAR,
  LANDING_TO_YEAR
} from "../../../../../constants/constants";

const MapLandings = (props) => {
  const { typeFilter, quantityFilter, fromYear, toYear, allClasses, typeClass, saveAllClasses } = props.data;
  const [isSearching, setIsSearching] = useState(false);
  const [landings, setLandings] = useState([]);
  const [newURI, setNewURI] = useState('');

  const getAllClasses = (data) => {
    const landingClassesFilter = data.filter((landing, index) => {
      const firstIndex = data.findIndex(({ recclass }) => {
        return recclass === landing.recclass;
      });
      return firstIndex === index;
    });

    const nameClasses = landingClassesFilter.map(landing => { return landing.recclass });
    saveAllClasses(nameClasses);
  }

  useEffect(
    () => {
      (async () => {
        if (typeFilter !== '' && (quantityFilter !== '' || fromYear !== '' || toYear !== '' || typeClass !== '')) {
          if (typeFilter === LANDING_MIN_MASS) {
            setNewURI(`?minimum_mass=${quantityFilter}`);
          } else if (typeFilter === LANDING_MASS) {
            setNewURI(`/mass/${quantityFilter}`);
          } else if (typeFilter === LANDING_CLASS) {
            setNewURI(`/class/${typeClass}`);
          } else if (typeFilter === LANDING_BETWEEN_YEARS) {
            setNewURI(`?from=${fromYear}&to=${toYear}`);
          } else if (typeFilter === LANDING_FROM_YEAR) {
            setNewURI(`?from=${fromYear}`);
          } else if (typeFilter === LANDING_TO_YEAR) {
            setNewURI(`?to=${toYear}`);
          }
        }
      })();
    }, [typeFilter, quantityFilter, fromYear, toYear, typeClass]
  )

  useEffect(
    () => {
      (async () => {
        try {
          setIsSearching(true);
          const response = await axios.get(`${process.env.REACT_APP_HOST}${API_LANDING_URI}${newURI}`);
          const data = await response.data;
          setLandings([...data]);
          setIsSearching(false);
          if (allClasses.length === 0) {
            getAllClasses(data);
          }
        } catch (error) {
          setIsSearching(false);
          console.log('error --> ', error);
        }
      })();
    }, [newURI]
  )

  const paintMarkers = () => {
    return landings.map(
      landing => {
        if (landing.geolocation){
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
                  {landing.year ? <p>Year: {landing.year}</p> : ''}
                  {landing.recclass ? <p>Class: {landing.recclass}</p> : ''}
                  {landing.mass ? <p>Mass: {landing.mass}g</p> : ''}
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
        {isSearching ? <p>Loading...</p> : paintMarkers()}
      </MapContainer>
    </div>
  );
}

export default MapLandings;
