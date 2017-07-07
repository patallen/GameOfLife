import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPlayerSpeed, setPlayerHistoryLength } from '../actions/player';
import { setGameView } from '../actions/game-view';

import RangeSlider from '../components/ui/slider';

class Sidebar extends React.Component {
    render() {
        let {actions} = this.props;
        return (
            <div className="sidebar">
                <label className="row-label">Settings</label>
                <div className="sidebar-row">
                <RangeSlider
                    label="Speed (FPS)"
                    min={1} max={200}
                    step={1} initial={100}
                    callback={(value) => actions.setPlayerSpeed(parseInt(value))}
                />
                <RangeSlider
                    label="History Length"
                    min={0} max={5000}
                    step={100} initial={0}
                    callback={(value) => actions.setPlayerHistoryLength(parseInt(value))}
                />
                </div>
                <div className="sidebar-row">
                <label className="row-label">Controls</label>
                <RangeSlider
                    label="Speed (FPS)"
                    min={1} max={200}
                    step={1} initial={100}
                    callback={(value) => actions.setPlayerSpeed(parseInt(value))}
                />
                <RangeSlider
                    label="History Length"
                    min={0} max={5000}
                    step={100} initial={0}
                    callback={(value) => actions.setPlayerHistoryLength(parseInt(value))}
                />
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {return {};};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            setPlayerSpeed,
            setPlayerHistoryLength,
            setGameView
        }, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
