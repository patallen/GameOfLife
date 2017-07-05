import ActionTypes from './action-types';


export const setGameView = (gameView) => {
    return {
        type: ActionTypes.SET_GAME_VIEW,
        payload: gameView
    };
};

export const resetGameView = () => {
    return {type: ActionTypes.RESET_GAME_VIEW};
};