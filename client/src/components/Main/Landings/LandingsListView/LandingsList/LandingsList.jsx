import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import LandingCard from './LandingCard';
import { API_LANDING_URI } from '../../../../../constants/constants';

const LandingsList = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [landings, setLandings] = useState([]);

  const paintCards = () => {
    return landings.map(
      landing => {
        return <LandingCard key={uuidv4()} landing={landing} />
      }
    );
  }

  useEffect(
    () => {
      (async () => {
        try {
          setIsSearching(true);
          const response = await axios.get(`${process.env.REACT_APP_HOST}${API_LANDING_URI}`);
          const data = await response.data;
          setLandings([...data]);
          setIsSearching(false);
        } catch (error) {
          setIsSearching(false);
          console.log('error --> ', error);
        }
      })();
    }, []
  )

  return (
    <>
      {isSearching ? <p>Loading...</p> : paintCards()}
    </>
  );
};

export default LandingsList;
