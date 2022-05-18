import React from "react";
import { v4 as uuidv4 } from 'uuid';
import NeasCardCRUD from './NeasCardCRUD';
import useFetch from "../../../../../hooks/useFetch";
import { API_NEA_URI } from "../../../../../constants/constants";

const NeasListCRUD = () => {

  const { loading, result } = useFetch(`${process.env.REACT_APP_HOST}${API_NEA_URI}`);

  const paintCards = () => {
    return result.map(
      nea => {
        return <NeasCardCRUD key={uuidv4()} nea={nea} />
      }
    );
  }

    return (
    <>
      {loading ? <p>Loading...</p> : paintCards()}
    </>
  );
};

export default NeasListCRUD;
