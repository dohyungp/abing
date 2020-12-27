import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";
import me from "./me";
export default combineReducers({ auth, users, me });
