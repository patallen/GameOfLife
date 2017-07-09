import ActionTypes from '../actionTypes';


export const setGameView = (gameView) => {
    return {
        type: ActionTypes.SET_GAME_VIEW,
        payload: gameView
    };
};

export const resetGameView = () => {
    return {type: ActionTypes.RESET_GAME_VIEW};
};

export const setDisplayColors = (colors) => {
    return {
        type: ActionTypes.SET_DISPLAY_COLORS,
        payload: {colors}
    };
};

export const setDisplayOffset = (offset) => {
    return {
        type: ActionTypes.SET_DISPLAY_OFFSET,
        payload: {offset}
    };
};

export const setDisplayScale = (scale) => {
    return {
        type: ActionTypes.SET_DISPLAY_SCALE,
        payload: {scale}
    };
};
