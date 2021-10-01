import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import VideoChat from "./VideoChat";
import NoMatch from "./Components/404";
import SignUp from "./Components/SignUp";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/video">
            <VideoChat />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
