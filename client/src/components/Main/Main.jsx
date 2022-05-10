import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LandingsMap from './Landings/LandingsMapView';
import LandingsList from './Landings/LandingsListView';
import NeasList from './Neas/NeasListView';
import NeasAdd from './Neas/NeasAddView';

class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<LandingsMap />} path='/landings' />
          <Route element={<LandingsList />} path='/landings/list' />
          <Route element={<NeasList />} path='/neas' />
          <Route element={<NeasAdd />} path='/neas/list' />
        </Routes>
      </main>
    );
  }
}

export default Main;
