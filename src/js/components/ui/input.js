import React from "react";
import { GroupedValidator } from "../../lib/validators";

export class TextInput extends React.Component {
  constructor({ validators = [], onChange }) {
    super();
    console.log(validators);
    this.validator = new GroupedValidator(validators);
    this.onChange = onChange ? onChange : () => {};
  }
  handleChange(e) {
    let { success, message } = this.validator.validate(this.value);
    this.success = success;
    this.message = message;
  }
  get value() {
    return this.input.value;
  }
  render() {
    let { placeholder, label } = this.props;
    return (
      <div className="form-component">
        <label>
          {label}
        </label>
        <input
          ref={i => (this.input = i)}
          placeholder={placeholder}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export class NumberInput extends React.Component {
  constructor({ validators = [] }) {
    super();
    this.validator = new GroupedValidator(validators);
  }
  get value() {
    return this.input.value;
  }
  handleChange(e) {
    let { success, message } = this.validator.validate(this.value);
    this.success = success;
    this.message = message;
  }
  render() {
    let { placeholder, label } = this.props;
    return (
      <div className="form-component">
        <label>
          {label}
          <input
            ref={i => (this.input = i)}
            placeholder={placeholder}
            onChange={this.handleChange.bind(this)}
          />
        </label>
      </div>
    );
  }
}
