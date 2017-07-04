import React from 'react';

import Player from './player';


export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-row separate">
                    <span className="sidebar-label">Controls</span>
                </div>
            </div>
        );
    }
}
