import { combineReducers } from "redux";
import login from "./auth";
import users from "./users";
import me from "./me";
export default combineReducers({ login, users, me });
