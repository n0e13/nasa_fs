import React, { useState } from "react";
import MenuLandings from '../LandingsMenuViews';
import LandingsFormMap from './LandingsFormMap';
import MapLandings from './MapLandings';

const LandingsMapView = () => {
  const [typeFilter, setTypeFilter] = useState('');
  const [quantityFilter, setQuantityFilter] = useState('');

  const setFilters = {
    setTypeFilter,
    setQuantityFilter
  }

  const dataFilters = {
    typeFilter,
    quantityFilter
  }

  return (
    <>
      <MenuLandings />
      <LandingsFormMap data={setFilters} />
      <MapLandings data={dataFilters} />
    </>
  );
};

export default LandingsMapView;
