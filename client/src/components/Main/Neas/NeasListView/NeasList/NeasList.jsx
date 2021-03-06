import React from "react";
import { v4 as uuidv4 } from 'uuid';
import NeasCard from './NeasCard';
import useFetch from '../../../../../hooks/useFetch';
import { API_NEA_URI } from '../../../../../constants/constants';

const NeasList = () => {

  const { loading, result } = useFetch(`${process.env.REACT_APP_HOST}${API_NEA_URI}`);

  const paintCards = () => {
    return result.map(
      nea => {
        return <NeasCard key={uuidv4()} nea={nea} />
      }
    );
  }

  return (
    <>
      {loading ? <p>Loading...</p> : paintCards()}
    </>
  );
};

export default NeasList;
