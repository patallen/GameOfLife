import React from 'react';

import Player from './player';
import { ToggleButton } from '../components/ui/buttons';

const GV_OPTIONS = [
    {
        identifier: "EDITOR",
        display: "Editor"
    },
    {
        identifier: "PLAYER",
        display: "Player"
    },
];

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-row align-center">
                    <ToggleButton options={GV_OPTIONS} callback={(s) => console.log(s)} />
                </div>
            </div>
        );
    }
}
