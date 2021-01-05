import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";
import me from "./me";
import { arms } from "./arm";
import { experiment, experiments } from "./experiment";
import { features } from "./feature";
export default combineReducers({
  auth,
  users,
  me,
  experiment,
  experiments,
  arms,
  features,
});
