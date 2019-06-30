import React from "react";
import NavBar from "./components/NavBar";
import Channels from "./components/Channels";
import CheckBoxContainer from "./components/CheckBoxContainer";
import Channel from "./components/Channel";
import { Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <CheckBoxContainer />
      <Switch>
        <Route exact path="/" component={Channels} />
        <Route path="/channel/:id" component={Channel} />
      </Switch>
    </div>
  );
}

export default App;
