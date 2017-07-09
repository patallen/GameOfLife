import React from 'react';
import style from '../../scss/main.scss';


function max(a, b) {
    return a > b ? a: b;
}
function min(a, b) {
    return a < b ? a: b;
}


export default class Display extends React.Component {
    constructor({colors}) {
        super();
        this.dragging = false;
        this.offset = {x: 0, y: 0};
        this.colors = colors;
        this.offset = {x: 0, y: 0};
        this.scale = 10;
    }
    componentDidMount() {
        this.offset = {x: 0, y: 0};
        this.canvas = this.refs.canvas;
        this.context = this.canvas.getContext('2d');
        this.resize(this._width, this._height);
        this.addEventListeners();
        let loop = () => {
            this.draw();
            requestAnimationFrame(loop);
        };
        loop();
    }
    addEventListeners() {
        document.addEventListener("mouseup", () => {
            this.dragging = false;
        });
        this.canvas.addEventListener("mousedown", () => {
            this.dragging = true;
        });
        this.canvas.addEventListener("mousewheel", (e) => {
            e.preventDefault();
            let ns = this.scale + (e.deltaY * .05);
            this.scale = ns < 2 ? 2 : (ns > 100 ? 100 : ns);
        });
        this.canvas.addEventListener("mousemove", (e) => {
            if (this.dragging) {
                this.offset.x += e.movementX;
                this.offset.y += e.movementY;
            }
        });
        window.addEventListener("resize", () => {
            this.resize();
            this.draw();
        });
    }
    _axisBounds(offset, maxLen, screenPx) {
        let count = screenPx / this.scale + 1;
        let low, high;
        if(offset > 0) {
            low = 0;
            count = Math.ceil((screenPx - offset) / this.scale);
        } else {
            low = Math.floor(-offset / this.scale);
            offset = offset % this.scale;
        }
        high = min(low + count, maxLen - 1);
        return {low, high, offset};
    }
    _getBounds(boardWidth, boardHeight) {
        let xSpecs = this._axisBounds(this.offset.x, boardWidth, this.width);
        let ySpecs = this._axisBounds(this.offset.y, boardHeight, this.height);
        return {
            offset: {
                x: xSpecs.offset,
                y: ySpecs.offset},
            bounds: {
                x: [xSpecs.low, xSpecs.high],
                y: [ySpecs.low, ySpecs.high]
            }
        };
    }
    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = this.colors.dead;
    }
    resize(callback) {
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        if (typeof callback === 'function') {
            callback(this);
        }
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
    set width(width) {
        this.canvas.width = width;
    }
    set height(height) {
        this.canvas.height = height;
    }
    draw() {
        this.clear();

        let s = this.scale;
        let board = this.props.board;
        let {offset, bounds} = this._getBounds(board.width, board.height);
        let xDist = (bounds.x[1] - bounds.x[0]) * s;
        let yDist = (bounds.y[1] - bounds.y[0]) * s;
        this.context.fillRect(offset.x, offset.y, xDist, yDist);
        this.context.fillStyle = this.colors.alive;
        this.fillStyle = this.colors.alive;
        for (let y = bounds.y[0]; y <= bounds.y[1]; y++) {
            for (let x = bounds.x[0]; x <= bounds.x[1]; x++) {
                let xx = Math.floor(s * (x - bounds.x[0])) + offset.x;
                let yy = Math.floor(s * (y - bounds.y[0])) + offset.y;
                if (board.cells[y][x]) {
                    this.context.fillRect(xx, yy, s, s);
                }
            }
        }
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <canvas id="canvas" ref="canvas" style={{width: "100%", height: "100%"}}>
            </canvas>
        );
    }
}
