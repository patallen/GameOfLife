import React from "react";
import style from "../../scss/containers/display.scss";
import {
  setDisplayColors,
  setDisplayOffset,
  setDisplayScale
} from "../actions/game-view.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Display extends React.Component {
  constructor() {
    super();
    this.state = { dragging: false };
  }
  clear() {}
  draw(board) {}

  componentDidUpdate() {}
  resize(callback) {
    let canvas = this.canvas;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    if (typeof callback === "function") callback(this);
  }
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.context = this.canvas.getContext("2d");
    this._setEventListeners();
  }
  _setEventListeners() {
    let { dragging, settings, actions, state } = this.props;

    window.addEventListener("resize", () => {
      this.resize();
    });

    window.addEventListener("mouseup", () => {
      this.setState({ dragging: false });
    });

    this.canvas.addEventListener("mousedown", () => {
      this.setState({ dragging: true });
    });

    this.canvas.addEventListener("mousemove", e => {
      if (this.state.dragging) {
        let offset = {
          x: state.offset.x + e.movementX,
          y: state.offset.y + e.movementY
        };
        actions.setDisplayOffset(offset);
      }
    });

    this.canvas.addEventListener("mousewheel", e => {
      let ns = state.scale + e.deltaY * 0.05;
      actions.setDisplayScale(ns < 2 ? 2 : ns > 100 ? 100 : ns);
    });
  }
  render() {
    return <canvas ref="canvas" />;
  }
}

//   _getBounds(offset, boardWidth, boardHeight, scale) {
//     let xSpecs = this._axisBounds(offset.x, boardWidth, this.width, scale);
//     let ySpecs = this._axisBounds(offset.y, boardHeight, this.height, scale);
//     return {
//       offset: {
//         x: xSpecs.offset,
//         y: ySpecs.offset
//       },
//       bounds: {
//         x: [xSpecs.low, xSpecs.high],
//         y: [ySpecs.low, ySpecs.high]
//       }
//     };
//   }
//   _axisBounds(offset, maxLen, screenPx, scale) {
//     let count = screenPx / scale + 1;
//     let low, high;
//     if (offset > 0) {
//       low = 0;
//       count = Math.ceil((screenPx - offset) / scale);
//     } else {
//       low = Math.floor(-offset / scale);
//       offset = offset % scale;
//     }
//     high = min(low + count, maxLen - 1);
//     return { low, high, offset };
//   }
//   clear() {
//     this.context.clearRect(0, 0, this.width, this.height);
//   }
//   fillCell(x, y, bounds, offset, scale) {
//     let xx = Math.floor(scale * (x - bounds.x[0])) + offset.x;
//     let yy = Math.floor(scale * (y - bounds.y[0])) + offset.y;
//     this.context.fillStyle = this.colors.alive;
//     this.context.fillRect(xx, yy, scale, scale);
//   }
//   draw(board, scale, offsets) {
//     this.clear();
//     let { offset, bounds } = this._getBounds(
//       offsets,
//       board.width,
//       board.height,
//       scale
//     );
//
//     let xDist = (bounds.x[1] - bounds.x[0]) * scale;
//     let yDist = (bounds.y[1] - bounds.y[0]) * scale;
//     for (let y = bounds.y[0]; y <= bounds.y[1]; y++) {
//       for (let x = bounds.x[0]; x <= bounds.x[1]; x++) {
//         if (board.cells[y][x]) this.fillCell(x, y, bounds, offset, scale);
//       }
//     }
//   }
// }

function mapStateToProps(state) {
  return {
    settings: state.display.settings,
    state: state.display.state
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
export default connect(mapStateToProps, mapDispatchToProps)(Display);

function max(a, b) {
  return a > b ? a : b;
}
function min(a, b) {
  return a < b ? a : b;
}
