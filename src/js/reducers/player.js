import { copyObject } from '.';


function playerReducer(state, action) {
    if (!state) {
        return {
            board: [],
            state: "PAUSED",
            settings: {
                fps: 25,
                zoom: 1
            }
        };
    }
    return copyObject(state);
}

export default playerReducer;
