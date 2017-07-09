import { copyObject } from '.';

import ActionTypes from '../actionTypes';

const InitialState = {
    view: "PLAYER",
    settings: {
        colors: {dead: "blue", alive: "red"},
        offset: {x: 0, y: 0},
        scale: 10
    }
};

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
        case ActionTypes.SET_DISPLAY_COLORS:
        case ActionTypes.SET_DISPLAY_OFFSET:
        case ActionTypes.SET_DISPLAY_SCALE:
            Object.assign(temp.settings, action.payload);
            break;
    };
    return temp;
}

export default viewReducer;
