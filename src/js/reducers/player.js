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
    return state;
}

export default playerReducer;
