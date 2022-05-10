import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Nav extends Component {
  render() {
    return(
      <nav>
      <Link to='/' className="nav__element">Home</Link>
      <br />
      <Link to='/landings' className="nav__element">Asteroides</Link>
      <br />
      <Link to='/neas' className="nav__element">NEAs</Link>
    </nav>
      );
  }
}

export default Nav;
