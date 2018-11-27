import React, { Component } from "react";
import MainRoute from "./Routes/MainRoute";
import Sidebar from "./Components/Sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <MainRoute />
      </div>
    );
  }
}

export default App;
