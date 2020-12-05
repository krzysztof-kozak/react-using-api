import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { UserList, UserDetails } from "./components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={UserList} />
        <Route path="/:userID" component={UserDetails} />
      </Router>
    </div>
  );
}
