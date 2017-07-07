import React from 'react';
import { ToggleButton } from '../components/ui/buttons';
const GV_OPTIONS = [
    {identifier: "EDITOR", display: "Editor"},
    {identifier: "PLAYER", display: "Player"}
];

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="toggle-button-case">
                    <ToggleButton options={GV_OPTIONS} callback={(s) => {}} />
                </div>
            </div>
        );
    }
}
