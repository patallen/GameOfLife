import { combineReducers } from "redux";

import playerReducer from "./player";
import gameViewReducer from "./game-view";
import displayReducer from "./display";

export default combineReducers({
  view: gameViewReducer,
  player: playerReducer,
  display: displayReducer
});

export function copyObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}
