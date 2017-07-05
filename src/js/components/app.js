import React from 'react';

import Sidebar from '../containers/Sidebar';
import GameView from '../containers/GameView';


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
