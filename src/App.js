import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./pages/Top";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Watch} />
      </Switch>
    </Router>
  );
};

export default App;
