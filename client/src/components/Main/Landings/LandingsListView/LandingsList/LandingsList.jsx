import React, { useState, useEffect } from "react";
import axios from 'axios';
import LandingCard from './LandingCard';
import { API_LANDING_URI } from '../../../../../constants/constants';


const LandingsList = () => {
  
  const [isSearching, setIsSearching] = useState(false);
  const [landings, setLandings] = useState([]);


  const deleteLanding = (i) => {
    const remainingLandings = landings.filter((landing, j) => {
      return i !== j
    })
    setLandings(remainingLandings);
    paintCards();
  }


  const paintCards = () => {
    return landings.map(
      (landing, i) => {
        return <LandingCard key={i} landing={landing} delete={() => deleteLanding(i)} />
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
