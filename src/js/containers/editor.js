import React from "react";

const CELLS_PER_ROW = 50;
const CELLS_PER_COLUMN = 40;

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
  return board;
};

export default class Editor extends React.Component {
  constructor({ width, height, scale }, ...state) {
    super();
    this.mult = 0.001;
    let board = {
      width,
      height,
      board: randomBoard(width, height)
    };
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.state = {
      board: board,
      zoom: state.zoom,
      pinPoint: state.pinPoint,
      offset: { x: 0, y: 0 },
      colors: {
        dead: "rgba(0, 0, 50, 0.9)",
        alive: "#FFFFFF"
      }
    };
  }
  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.context = this.canvas.getContext("2d");
    window.addEventListener("resize", () => {
      this.resizeCanvas();
      this.renderCanvas();
    });
    this.resizeCanvas();
    this.renderCanvas();
  }
  resizeCanvas() {
    let wrapper = this.refs.wrapper;
    this.canvas.width = wrapper.offsetWidth;
    this.canvas.height = wrapper.offsetHeight;
  }
  renderCanvas() {
    let { colors, zoom = 1, board, pinPoint } = this.state;
    let s = this.scale * zoom;
    for (let row = 0; row < board.height; row++) {
      for (let col = 0; col < board.width; col++) {
        let cellAlive = board.board[row][col];
        if (cellAlive) this.context.fillStyle = colors.alive;
        else this.context.fillStyle = colors.dead;
        this.context.fillRect(10 * col, 10 * row, 10, 10);
      }
    }
  }
  componentWillUpdate() {
    this.renderCanvas();
  }
  render() {
    let display = this.props.enabled ? "block" : "none";
    let style = { display };
    return (
      <div ref="wrapper" style={{ width: "100%", height: "100%" }}>
        <canvas
          id="canvas-editor"
          className="board-canvas"
          ref="canvas"
          onClick={this.renderCanvas.bind(this)}
        />
      </div>
    );
  }
}
