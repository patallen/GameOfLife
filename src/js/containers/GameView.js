import React from 'react';
import Perf from 'react-addons-perf'; // ES6

import { connect } from 'react-redux';

import Player from '../containers/Player';
import Editor from '../containers/Editor';
import Display from '../containers/Display';


const randomBoard = (x, y) => {
    let board = [];
    for (let i = 0; i < y; i++) {
        let row = [];
        for (let j = 0; j < x; j++) {
            let value = Math.round(Math.random(1)) === 1;
            row.push(value);
        }
        board.push(row);
    }
    return {
        width: x,
        height: y,
        cells: board
    };
};

class GameView extends React.Component {
    constructor() {
        super();
        this.board = randomBoard(400, 300);
    }
    render() {
        let { view } = this.props;
        return (
            <div className="game-view">
                <Display colors={{dead: "#AAA", alive: "#222"}} board={this.board}/>
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
