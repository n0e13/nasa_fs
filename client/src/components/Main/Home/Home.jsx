import React, { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {

  const [apod, setApod] = useState({});

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const resp = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`);
          const data = await resp.data;
          setApod(data);
        } catch (error) {
          console.log(error);
          setApod('');
        }
      };
      fetchData();
    },
    []
  );

// TODO: poner CSS
  return (
    <figure className="apod__figure">
      <img src={apod.url} alt={apod.title}/>
      <figcaption>{apod.explanation}</figcaption>
    </figure>
  );

}

export default Home;
