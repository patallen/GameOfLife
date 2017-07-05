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
