import React from "react";
import { useNavigate } from "react-router-dom";

const LandingsMenuViews = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.target.id === 'map'
      ? navigate('/landings')
      : navigate('/landings/list')
  }

  return (
    <div>
      <button onClick={handleClick} id='map'>Mapa</button>
      <button onClick={handleClick} id='list'>Lista</button>
    </div>
  );
};

export default LandingsMenuViews;
