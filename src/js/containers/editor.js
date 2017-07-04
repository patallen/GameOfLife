import React from 'react';


export default class Editor extends React.Component {
    render() {
        let display = this.props.enabled ? "block" : "none";
        let style = {display};
        return (
            <canvas id="canvas-editor" className="board-canvas" style={style}>
            </canvas>
        );
    }
}
