import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Landings from './Landings';
import Neas from './Neas';

class Main extends Component {
  render() {
    return (
      <main>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Landings />} path='/landings' />
        <Route element={<Neas />} path='/neas' />
      </Routes>
    </main>
      );
  }
}

export default Main;
