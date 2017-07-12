import React from "react";

export class ToggleButton extends React.Component {
  constructor({ options, callback }) {
    super();
    this.callback = callback;
    this.options = { first: options[0], second: options[1] };
    this.state = { selected: this.options.first };
  }
  toggle() {
    let state;
    if (this.state.selected === this.options.first) {
      state = this.options.second;
    } else {
      state = this.options.first;
    }
    this.setState({ selected: state });
    this.callback(state);
  }
  render() {
    let selectedClass =
      this.state.selected === this.options.first ? "state-right" : "state-left";
    return (
      <div className="toggle-wrapper">
        <div className="toggle-option toggle-option-left">
          {this.options.first.display}
        </div>
        <div className="toggle-option toggle-option-right">
          {this.options.second.display}
        </div>
        <div className="toggle-cover">
          <div
            onClick={() => this.toggle()}
            className={`toggle-nub ${selectedClass}`}
          />
        </div>
      </div>
    );
  }
}

export class ActionGroup extends React.Component {
  render() {
    return (
      <div className="action-group">
        {this.props.children}
      </div>
    );
  }
}

export class ActionButton extends React.Component {
  render() {
    let onClick = this.props.onClick;
    return (
      <div className="action-button" onClick={onClick}>
        {this.props.title}
      </div>
    );
  }
}

export class Button extends React.Component {
  render() {
    let { text, onClick } = this.props;
    return (
      <button ref={b => (this.button = b)} onClick={onClick}>
        {text}
      </button>
    );
  }
}
