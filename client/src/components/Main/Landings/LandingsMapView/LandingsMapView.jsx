import React from "react";
import MenuLandings from '../LandingsMenuViews';
import LandingsFormMap from './LandingsFormMap';
import MapLandings from './MapLandings';

const LandingsMapView = () => {
  return (
    <>
      <MenuLandings />
      <LandingsFormMap/>
      <MapLandings />
    </>
  );
};

export default LandingsMapView;
