import React from "react";
import { bindActionCreators } from "redux";
import {
  setDisplayColors,
  setDisplayOffset,
  setDisplayScale
} from "../actions/game-view.js";
import { connect } from "react-redux";

import Player from "../containers/Player";
import Editor from "../containers/Editor";
import Display from "../containers/Display";

import Board from "../game.js";

const COLORS = {
  dead: "#AAA",
  alive: "#222"
};

const randomBoard = (x, y) => {
  let cells = [];
  for (let i = 0; i < y; i++) {
    let row = [];
    for (let j = 0; j < x; j++) {
      let value = Math.round(Math.random(1)) === 1;
      row.push(value);
    }
    cells.push(row);
  }
  return cells;
};

class GameView extends React.Component {
  createGame(width, height, layoutFn) {
    this.board = new Board({ width, height, layoutFn });
  }
  render() {
      return (
          <div className="game-view">
            <Display />
          </div>
      );
  }
  addEventListeners() {
  }
}

function mapStateToProps(state) {
  return {
    view: state.view.view,
    settings: state.view.settings
  };
}

export default connect(mapStateToProps)(GameView);
