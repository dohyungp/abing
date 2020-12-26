import { combineReducers } from "redux";
import login from "./auth";
import users from "./users";
export default combineReducers({ login, users });
