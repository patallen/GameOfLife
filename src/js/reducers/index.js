import { combineReducers } from 'redux';

import playerReducer from './player';
import gameViewReducer from './game-view';


export default combineReducers({
    view: gameViewReducer,
    player: playerReducer
});


export function copyObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}
