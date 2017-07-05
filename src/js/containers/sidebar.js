import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Player from './player';
import { ToggleButton } from '../components/ui/buttons';

const GV_OPTIONS = [
    {
        identifier: "PLAYER",
        display: "Player"
    },
    {
        identifier: "EDITOR",
        display: "Editor"
    },
];
let toggleGameView = (viewState) => {
    return {
        type: "SET_GAME_VIEW",
        payload: viewState
    };
};
class Sidebar extends React.Component {
    render() {
        let {actions} = this.props;
        return (
            <div className="sidebar">
                <div className="sidebar-row align-center">
                <ToggleButton options={GV_OPTIONS} callback={(s) => actions.toggleGameView(s.identifier)} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({toggleGameView}, dispatch)};
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
