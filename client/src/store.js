import {legacy_createStore as createStore,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from "@redux-devtools/extension";
import rootreducers from "./components/redux/reducers/main";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/redux/reducers/userReducer";
const middleware = [thunk];

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;