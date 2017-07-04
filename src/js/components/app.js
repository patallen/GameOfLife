import React from 'react';

import Sidebar from '../containers/sidebar';
import GameView from '../containers/game-view';


export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Sidebar />
                <GameView />
            </div>
        );
    }
}
