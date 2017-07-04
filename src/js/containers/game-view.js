import React from 'react';

import { connect } from 'react-redux';

import Player from '../containers/player';
import Editor from '../containers/editor';


class GameView extends React.Component {
    render() {
        return (
            <div className="game-view">
                <Player enabled={this.props.view === "PLAYER"} />
                <Editor enabled={this.props.view === "EDITOR"} />
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
