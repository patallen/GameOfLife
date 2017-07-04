import React from 'react';

export class ToggleButton extends React.Component {
    constructor({ options, callback }) {
        super();
        this.callback = callback;
        this.options = {first: options[0], second: options[1]};
        this.state = {selected: this.options.first};
    }
    toggle() {
        let state;
        if(this.state.selected === this.options.first) {
            state = this.options.second;
        } else {
            state = this.options.first;
        }
        this.setState({selected: state});
        this.callback(state);
    }
    render() {
        const selectClass = () => {
            return this.state.selected === this.options.first ? "state-left" : "state-right";
        };
        let { callback } = this.props;
        return (
            <div className="toggle-wrapper">
                <div className="toggle-option toggle-option-left">{this.options.first.display}</div>
                <div className="toggle-option toggle-option-right">{this.options.second.display}</div>
                <div className="toggle-cover">
                    <div onClick={() => this.toggle(callback)} className={`toggle-nub ${selectClass()}`} />
                </div>
            </div>
        );
    }
}
