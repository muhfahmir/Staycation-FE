import "./assets/scss/styles.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
