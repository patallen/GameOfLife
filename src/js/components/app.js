import React from "react";

import Header from "../containers/header";
import Sidebar from "../containers/Sidebar";
import GameView from "../containers/GameView";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <GameView />
      </div>
    );
  }
}
