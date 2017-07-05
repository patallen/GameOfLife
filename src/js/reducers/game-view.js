import { copyObject } from '.';

import ActionTypes from '../actionTypes';

const InitialState = {view: "PLAYER"};

function viewReducer(state, action) {
    if(state === undefined)
        return InitialState;

    let temp = copyObject(state);
    switch (action.type) {
        case ActionTypes.SET_GAME_VIEW:
            temp.view = action.payload;
            break;
        case ActionTypes.RESET_GAME_VIEW:
            temp.view = "PLAYER";
            break;
    };
    return temp;
}

export default viewReducer;
