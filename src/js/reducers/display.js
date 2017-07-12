import { copyObject } from ".";

import ActionTypes from "../actionTypes";

const InitialState = {
  settings: {
    colors: { dead: "#aaa", alive: "#222" }
  },
  state: {
    offset: { x: 0, y: 0 },
    scale: 10
  }
};

function displayReducer(state, action) {
  if (state === undefined) return InitialState;

  let temp = copyObject(state);
  switch (action.type) {
    case ActionTypes.SET_DISPLAY_COLORS:
      Object.assign(temp.settings, action.payload);
      break;
    case ActionTypes.SET_DISPLAY_OFFSET:
    case ActionTypes.SET_DISPLAY_SCALE:
      Object.assign(temp.state, action.payload);
      break;
  }
  return temp;
}

export default displayReducer;
