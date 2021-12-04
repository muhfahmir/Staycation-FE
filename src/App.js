import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/styles.scss";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

import Example from "pages/Example";
import Example2 from "pages/Example2";
import Example3 from "pages/Example3";

// toast message
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} exact />
        <Route path="/properties/:id" component={DetailsPage} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/example" component={Example} exact />
        <Route path="/example2" component={Example2} exact />
        <Route path="/example3" component={Example3} exact />
      </Router>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
