import React from "react";
import NavBar from "./components/NavBar";
import Channels from "./components/Channels";
import CheckBoxContainer from "./components/CheckBoxContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <CheckBoxContainer />
      <Channels />
    </div>
  );
}

export default App;
