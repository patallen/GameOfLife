import React from "react";
import Perf from "react-addons-perf"; // ES6
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
  constructor() {
    super();
  }
  createGame(width, height, layoutFn) {
    this.board = new Board({ width, height, layoutFn });
  }
  componentDidMount() {
    let canvas = this.refs.canvas;
    this.createGame(600, 400, () => randomBoard(400, 300));
    this.display = new Display(canvas, this.props.settings.colors);
    this.display.setColors(COLORS);
    this.addEventListeners();
    this.gameLoop();
  }
  gameLoop() {
    this.displayDraw();
    if (!this.paused) {
      requestAnimationFrame(this.gameLoop.bind(this));
    }
  }
  displayDraw() {
    let { colors, scale, offset } = this.props.settings;
    let board = this.board.toObject();
    this.display.draw(board, scale, offset);
  }
  render() {
    let { view } = this.props;
    return (
      <div className="game-view">
        <canvas
          id="canvas"
          ref="canvas"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }
  addEventListeners() {
    window.addEventListener("resize", () => {
      this.display.resize();
      this.displayDraw(this.board);
    });
    this.display.addEventListener("mousemove", e => {
      if (this.display.dragging) {
        let offset = {
          x: this.props.settings.offset.x + e.movementX,
          y: this.props.settings.offset.y + e.movementY
        };
        this.props.actions.setDisplayOffset(offset);
      }
    });
    this.display.addEventListener("mousewheel", e => {
      let ns = this.props.settings.scale + e.deltaY * 0.05;
      this.props.actions.setDisplayScale(ns < 2 ? 2 : ns > 100 ? 100 : ns);
    });
  }
}

function mapStateToProps(state) {
  return {
    view: state.view.view,
    settings: state.view.settings
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        setDisplayColors,
        setDisplayScale,
        setDisplayOffset
      },
      dispatch
    )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameView);
