import React from 'react';
import style from '../../scss/main.scss';


function max(a, b) {
    return a > b ? a: b;
}
function min(a, b) {
    return a < b ? a: b;
}


export default class Display {
    constructor(canvas, colors) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.colors = colors;
        this.offset = {x: 0, y: 0};
        this.addEventListeners();
        this.resize();
        this.dragging = false;
    }
    addEventListener(eventName, callback) {
        this.canvas.addEventListener(eventName, callback);
    }
    addEventListeners() {
        document.addEventListener("mouseup", () => {
            this.dragging = false;
        });
        this.canvas.addEventListener("mousedown", () => {
            this.dragging = true;
        });
    }
    _getBounds(offset, boardWidth, boardHeight, scale) {
        let xSpecs = this._axisBounds(offset.x, boardWidth, this.width, scale);
        let ySpecs = this._axisBounds(offset.y, boardHeight, this.height, scale);
        return {
            offset: {
                x: xSpecs.offset,
                y: ySpecs.offset
            },
            bounds: {
                x: [xSpecs.low, xSpecs.high],
                y: [ySpecs.low, ySpecs.high]
            }
        };
    }
    _axisBounds(offset, maxLen, screenPx, scale) {
        let count = screenPx / scale + 1;
        let low, high;
        if(offset > 0) {
            low = 0;
            count = Math.ceil((screenPx - offset) / scale);
        } else {
            low = Math.floor(-offset / scale);
            offset = offset % scale;
        }
        high = min(low + count, maxLen - 1);
        return {low, high, offset};
    }
    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    resize(callback) {
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        if (typeof callback === 'function') {
            callback(this);
        }
    }
    setColors({dead, alive}) {
        if(dead)
            this.colors.dead = dead;
        if(alive)
            this.colors.alive = alive;
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
    fillCell(x, y, bounds, offset, scale, color) {
        let xx = Math.floor(scale * (x - bounds.x[0])) + offset.x;
        let yy = Math.floor(scale * (y - bounds.y[0])) + offset.y;
        this.context.fillStyle = color;
        this.context.fillRect(xx, yy, scale, scale);
    }
    draw(board, scale, offsets) {
        this.clear();
        let {offset, bounds} = this._getBounds(offsets, board.width, board.height, scale);

        let xDist = (bounds.x[1] - bounds.x[0]) * scale;
        let yDist = (bounds.y[1] - bounds.y[0]) * scale;

        this.context.fillStyle = this.colors.dead;
        this.context.fillRect(offset.x,offset.y, xDist + scale, yDist + scale);

        for (let y = bounds.y[0]; y <= bounds.y[1]; y++) {
            for (let x = bounds.x[0]; x <= bounds.x[1]; x++) {
                if (board.cells[y][x]) {
                    this.fillCell(x, y, bounds, offset, scale, this.colors.alive);
                }
            }
        }
    }
}
