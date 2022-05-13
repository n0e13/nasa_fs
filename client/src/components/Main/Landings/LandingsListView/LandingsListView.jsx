import React from "react";
import MenuLandings from '../LandingsMenuViews';
import LandingFormAdd from './LandingFormAdd';
import LandingsList from './LandingsList';

const LandingsListView = () => {
  return (
    <div>
      <MenuLandings />
      <LandingFormAdd />
      <LandingsList />
    </div>
  );
};

export default LandingsListView;
