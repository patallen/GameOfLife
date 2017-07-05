import React from 'react';

import { connect } from 'react-redux';


class Player extends React.Component {
    render() {
        let display = this.props.enabled ? "block" : "none";
        let style = {display};
        return (
            <canvas id="canvas-player" className="board-canvas" style={style}>
            </canvas>
        );
    }
}


function mapStateToProps({player}) {
    return {player};
}

export default connect(mapStateToProps)(Player);
