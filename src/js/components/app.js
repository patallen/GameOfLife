import React from "react";

import Header from "../containers/header";
import Sidebar from "../containers/Sidebar";
import GameView from "../containers/GameView";
import CreateFileModal from "../components/CreateFileModal.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <GameView />
        <CreateFileModal />
      </div>
    );
  }
}
