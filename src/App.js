import "./assets/scss/styles.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import React from "react";
import Example from "pages/Example";
import Example2 from "pages/Example2";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} exact />
        <Route path="/example" component={Example} exact />
        <Route path="/example2" component={Example2} exact />
      </Router>
    </div>
  );
}

export default App;
