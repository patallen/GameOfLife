import React from 'react';

import { connect } from 'react-redux';

import Player from '../containers/player';
import Editor from '../containers/editor';


class GameView extends React.Component {
    render() {
        let { view } = this.props;
        return (
            <div className="game-view">
                <Player enabled={view === "PLAYER"} />
                <Editor enabled={view === "EDITOR"} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        view: state.view.view
    };
}

export default connect(mapStateToProps)(GameView);
