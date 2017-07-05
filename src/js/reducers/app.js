function viewReducer(state, action) {
    if (state === undefined) {
        return {current: "PLAYER"};
    }
    return copyObject(state);
}

export default viewReducer;
