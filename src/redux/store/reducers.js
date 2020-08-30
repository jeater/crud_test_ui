import { combineReducers } from "redux";
import Userseducer from "../reducer";

const todoApp = combineReducers({
  users: Userseducer,
});

export default todoApp;
