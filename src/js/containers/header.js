import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToggleButton } from '../components/ui/buttons';

import {setGameView} from '../actions/game-view';


const GV_OPTIONS = [
    {identifier: "EDITOR", display: "Editor"},
    {identifier: "PLAYER", display: "Player"}
];

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="toggle-button-case">
                    <ToggleButton options={GV_OPTIONS} callback={this.props.actions.setGameView}  />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({setGameView}, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
