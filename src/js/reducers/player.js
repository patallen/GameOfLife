import { copyObject } from '.';
import ActionTypes from '../actionTypes';

const initialState = {
    board: [],
    state: "PAUSED",
    settings: {
        fps: 25,
        zoom: 1,
        maxHistory: 0
    }
};

function playerReducer(state, action) {
    if (state === undefined)
        return initialState;

    let newState = copyObject(state);
    switch (action.type) {
        case ActionTypes.SET_PLAYER_SPEED:
            newState.settings.fps = action.payload;
            break;
        case ActionTypes.SET_PLAYER_HISTORY_LENGTH:
            newState.settings.maxHistory = action.payload;
            break;
    }

    return newState;
}

export default playerReducer;
