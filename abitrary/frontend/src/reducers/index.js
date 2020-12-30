import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";
import me from "./me";
import { experiments } from "./experiment";
export default combineReducers({ auth, users, me, experiments });
