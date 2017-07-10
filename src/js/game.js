const directions = [
  { debug: "North", row: -1, col: 0 },
  { debug: "East", row: 0, col: 1 },
  { debug: "South", row: 1, col: 0 },
  { debug: "West", row: 0, col: -1 },
  { debug: "North East", row: -1, col: 1 },
  { debug: "South East", row: 1, col: 1 },
  { debug: "South West", row: 1, col: -1 },
  { debug: "North West", row: -1, col: -1 }
];

class Cell {
  constructor(state = false) {
    this.neighbors = new Array();
    this._states = { current: state, previous: false, next: false };
  }
  prepare() {
    let ncount = 0;
    for (let n of this.neighbors) {
      if (n.state) {
        ncount += 1;
      }
    }
    if (this._states.current) {
      if (ncount < 2 || ncount > 3) {
        this._states.next = false;
      }
    } else if (ncount === 3) {
      this._states.next = true;
    } else {
      this._states.next = this._states.current;
    }
  }
  update() {
    this._states.previous = this._states.current;
    this._states.current = this._states.next;
  }
  addNeighbor(cell) {
    this.neighbors.push(cell);
  }
  hasChanged() {
    return this._states.previous != this._states.current;
  }
  get state() {
    return this._states.current;
  }
}

export default class Board {
  constructor({ width, height, layoutFn }) {
    this.dimensions = {};
    this.init(layoutFn);
  }
  toObject() {
    return {
      width: this.width,
      height: this.height,
      cells: this.cells.map(arr => arr.map(c => c.state))
    };
  }
  init(layoutFn) {
    let cells = layoutFn();
    for (let row of cells) {
      for (let i = 0; i < row.length; i++) {
        let val = row[i];
        row[i] = new Cell(val);
      }
    }
    this.width = cells[0].length;
    this.height = cells.length;
    this.cells = cells;
    this.setNeighbors();
  }
  get width() {
    return this.dimensions.width;
  }
  get height() {
    return this.dimensions.height;
  }
  set width(value) {
    this.dimensions.width = value;
  }
  set height(value) {
    this.dimensions.height = value;
  }
  update() {
    this.prepareCells();
    let changed = this.updateCells();
    return changed;
  }
  updateCells() {
    let changed = [];
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        let cell = this.cells[row][col];
        cell.update();
        if (cell.hasChanged()) {
          changed.push({ row, col, cell });
        }
      }
    }
    return changed;
  }
  prepareCells() {
    for (let row of this.cells) {
      for (let cell of row) {
        cell.prepare();
      }
    }
  }
  setNeighbors() {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        for (let dir of directions) {
          let [r, c] = [row + dir.row, col + dir.col];
          if (r >= 0 && c >= 0 && r < this.height && c < this.width) {
            this.cells[row][col].addNeighbor(this.cells[r][c]);
          }
        }
      }
    }
  }
}
