import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ToggleButton } from '../components/ui/buttons';
import { setGameView } from '../actions/game-view';

import RangeSlider from '../components/ui/slider';
const GV_OPTIONS = [
    {identifier: "PLAYER", display: "Player"},
    {identifier: "EDITOR", display: "Editor"}
];

class Sidebar extends React.Component {
    render() {
        let {actions} = this.props;
        return (
            <div className="sidebar">
                <div className="sidebar-row align-center">
                    <ToggleButton options={GV_OPTIONS}
                        callback={(s) => actions.setGameView(s.identifier)} />
                </div>
                <div className="sidebar-row align-center">
                    <label className="row-label">Settings</label>
                <RangeSlider label="Speed (FPS)" min={1} max={200} step={1} initial={100}/>
                <RangeSlider label="History Length" min={0} max={5000} step={100} initial={0}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {return {};};
const mapDispatchToProps = (d) => {
    return {actions: bindActionCreators({setGameView}, d)}
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
