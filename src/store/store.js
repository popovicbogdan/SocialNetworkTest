import { createStore } from "redux";
import data from "../assets/data.json";
import rootReducer from "./reducers/rootReducer";

const initState = { users: data };

const store = createStore(rootReducer, initState);

export default store;
