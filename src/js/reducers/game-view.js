import { copyObject } from '.';

function viewReducer(state, action) {
    if(state === undefined) {
        return {view: "PLAYER"};
    }
    let temp = copyObject(state);
    switch (action.type) {
        case "SET_GAME_VIEW":
            temp.view = action.payload;
            break;
        case "RESET_GAME_VIEW":
            temp.view = "PLAYER";
            break;
    };
    return temp;
}

export default viewReducer;
