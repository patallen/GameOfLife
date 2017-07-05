import ActionTypes from '../actionTypes';


export const setPlayerState = (playerState) => {
    return {
        type: ActionTypes.SET_PLAYER_STATE,
        payload: playerState
    };
};

export const resetPlayerState = () => {
    return {type: ActionTypes.RESET_PLAYER_STATE};
};

export const setPlayerSpeed = (fps) => {
    return {
        type: ActionTypes.SET_PLAYER_SPEED,
        payload: fps
    };
};

export const setPlayerHistoryLength = (frameCount) => {
    return {
        type: ActionTypes.SET_PLAYER_HISTORY_LENGTH,
        payload: frameCount
    };
};
