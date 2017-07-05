import React from 'react';

export default class RangerSlider extends React.Component {
    constructor({min, max, step, label, initial, callback}) {
        super();
        this.min = min;
        this.max = max;
        this.step = step;
        this.label = label;
        this.callback = callback || (() => {});
        this.state = {value: initial};
    }
    handleInputEvent(event) {
        let {value} = event.target;
        this.setState({value});
        this.callback(value);
    }
    render() {
        return (
            <div className="range-slider">
                <label>{this.label}</label>
                <span className="value">{this.state.value}</span>
                <input type="range"
                    min={this.min}
                    max={this.max}
                    step={this.step}
                    defaultValue={this.state.value}
                    onInput={this.handleInputEvent.bind(this)}
                />
            </div>
        );
    }
}
