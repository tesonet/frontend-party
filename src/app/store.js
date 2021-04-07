import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "@reduxjs/toolkit";
import loginBoxSlice from "../components/LoginBox/services/slice";
import serversListSlice from "../components/ServersList/services/slice";

const reduxStates = {
  [loginBoxSlice.name]: loginBoxSlice.reducer,
  [serversListSlice.name]: serversListSlice.reducer,
};

const reducer = combineReducers(reduxStates);

export const getStore = () => configureStore({ reducer });