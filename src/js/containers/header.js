import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  ActionGroup,
  ActionButton,
  ToggleButton
} from "../components/ui/buttons";

import { setGameView, initiateCreateFile } from "../actions/game-view";

const GV_OPTIONS = [
  { identifier: "EDITOR", display: "Editor" },
  { identifier: "PLAYER", display: "Player" }
];

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ActionGroup>
          <ActionButton
            name="new"
            title="New"
            onClick={this.props.actions.initiateCreateFile}
          />
          <ActionButton name="save" title="Save" />
          <ActionButton name="share" title="Share" />
        </ActionGroup>
        <div className="toggle-button-case">
          <ToggleButton
            options={GV_OPTIONS}
            callback={this.props.actions.setGameView}
          />
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
    actions: bindActionCreators({ setGameView, initiateCreateFile }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
