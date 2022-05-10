import React from "react";
import { useNavigate } from "react-router-dom";;

const NeasMenuViews = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.target.id === 'list'
      ? navigate('/neas')
      : navigate('/neas/list')
  }

  return (
    <div>
      <button onClick={handleClick} id='list'>Lista</button>
      <button onClick={handleClick} id='add'>Add</button>
    </div>
  );
};

export default NeasMenuViews;
