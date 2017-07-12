import { copyObject } from ".";

import ActionTypes from "../actionTypes";

const InitialState = {
  view: "PLAYER",
  modals: {
    isCreatingNew: false
  }
};

function viewReducer(state, action) {
  if (state === undefined) return InitialState;
  let temp = copyObject(state);
  switch (action.type) {
    case ActionTypes.SET_GAME_VIEW:
      temp.view = action.payload;
      break;
    case ActionTypes.RESET_GAME_VIEW:
      temp.view = "PLAYER";
      break;
    case ActionTypes.INITIATE_CREATE_FILE:
      temp.modals.isCreatingNew = true;
      break;
    case ActionTypes.CANCEL_CREATE_FILE:
      temp.modals.isCreatingNew = false;
      break;
    case ActionTypes.CREATE_FILE:
      temp.modals.isCreatingNew = false;
      break;
  }
  return temp;
}

export default viewReducer;
