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

export const InputCase = ({ children }) => {
  return (
    <div className="input-case">
      {children}
    </div>
  );
};
export const ButtonCase = ({ children }) => {
  return (
    <div className="button-case">
      {children}
    </div>
  );
};

export const FormGroup = ({ children }) => {
  return (
    <div className="form-group">
      {children}
    </div>
  );
};

export const ActionGroup = ({ children }) => {
  return (
    <div className="action-group">
      {children}
    </div>
  );
};

export const ActionButton = ({ onClick, title }) => {
  return (
    <Button classNames={["action-button"]} onClick={onClick}>
      {title}
    </Button>
  );
};

export const Button = ({ classNames, onClick, children }) => {
  let classnames = ["button"];
  classnames.push(...classNames);
  return (
    <div className={classnames.join(" ")} onClick={onClick}>
      {children}
    </div>
  );
};

export const SuccessButton = props => {
  return <Button {...props} classNames={["button-success"]} />;
};

export const PanicButton = props => {
  return <Button {...props} classNames={["button-panic"]} />;
};

export const InfoButton = props => {
  return <Button {...props} classNames={["button-info"]} />;
};
