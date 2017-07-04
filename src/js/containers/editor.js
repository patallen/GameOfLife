import React from 'react';


export default class Editor extends React.Component {
    render() {
        let display = this.props.disabled ? "none" : "block";
        let style = {display};
        return (
            <canvas id="canvas-player" className="board-canvas" style={style}>
            </canvas>
        );
    }
}
