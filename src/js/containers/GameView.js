import React from 'react';

import { connect } from 'react-redux';

import Player from '../containers/Player';
import Editor from '../containers/Editor';


class GameView extends React.Component {
    render() {
        let { view } = this.props;
        return (
            <div className="game-view">
                <Editor enabled={view === "EDITOR"} width={2000} height={2000} scale={10} zoom={1}/>
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
