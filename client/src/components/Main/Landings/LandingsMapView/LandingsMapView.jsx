import React, { useState } from "react";
import MenuLandings from '../LandingsMenuViews';
import LandingsFormMap from './LandingsFormMap';
import MapLandings from './MapLandings';

const LandingsMapView = () => {
  const [typeFilter, setTypeFilter] = useState('');
  const [quantityFilter, setQuantityFilter] = useState('');
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');

  const saveTypeFilter = (filter) => {
    setTypeFilter(filter);
  }
  const saveQuantityFilter = (quantity) => {
    setQuantityFilter(quantity);
  }
  const saveFromYear = (from) => {
    setFromYear(from);
  }
  const saveToYear = (to) => {
    setToYear(to);
  }

  const setFilters = {
    saveTypeFilter,
    saveQuantityFilter,
    saveFromYear,
    saveToYear
  }

  const dataFilters = {
    typeFilter,
    quantityFilter,
    fromYear,
    toYear
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
