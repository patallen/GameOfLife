import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ToggleButton } from '../components/ui/buttons';
import { setGameView } from '../actions/game-view';

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
                <ToggleButton options={GV_OPTIONS} callback={(s) => actions.setGameView(s.identifier)} />
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
