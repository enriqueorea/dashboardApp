import React, { useContext, useState, createContext } from "react";

const StateContext = createContext();

const intialState = {
  chat: false,
  carte: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  return <StateContext.Provider></StateContext.Provider>;
};
