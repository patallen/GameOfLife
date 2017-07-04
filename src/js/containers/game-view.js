import React from 'react';

import Player from '../containers/player';
import Editor from '../containers/editor';

export default class GameView extends React.Component {
    render() {
        return (
            <div className="game-view">
                <Player />
                <Editor />
            </div>
        );
    }
}
