import React from "react";
import NeasMenuViews from '../NeasMenuViews';
import NeasFormAdd from "./NeasFormAdd";
import NeasListCRUD from './NeasListCRUD';

const NeasAddView = () => {
  return (
  <>
    <NeasMenuViews/>
    <NeasFormAdd/>
    <NeasListCRUD/>
  </>
    );
};

export default NeasAddView;
