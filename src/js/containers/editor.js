import React from 'react';

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
    console.log(board);
    return board;
};

export default class Editor extends React.Component {
    constructor({ width, height, scale }, ...state) {
        console.log(width, height, scale, state);
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
                dead: 'rgba(0, 0, 50, 0.9)',
                alive: '#FFFFFF'
            }
        };
    }
    componentDidMount() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.renderCanvas();
    }
    renderCanvas() {
        console.log("rendering");
        let { colors, zoom = 1, board, pinPoint } = this.state;
        let ctx = this.canvas.getContext('2d');
        let s = this.scale * zoom;
        console.log(s);
        for (let row = 0; row < board.height; row++) {
            for (let col = 0; col < board.width; col++) {
                let cellAlive = board.board[row][col];
                if (cellAlive) ctx.fillStyle = colors.alive;
                else ctx.fillStyle = colors.dead;
                ctx.fillRect(10 * col, 10 * row, 10, 10);
            }
        }
    }
    componentWillUpdate() {
        this.renderCanvas();
    }
    render() {
        let display = this.props.enabled ? "block" : "none";
        let style = {display};
        return (
            <canvas
                id="canvas-editor"
                className="board-canvas"
                ref={c => {this.canvas = c;}}
                onClick={this.renderCanvas.bind(this)}
            />
        );
    }
}
