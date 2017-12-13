import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../Components/App/App";
import About from "../Components/About/About";
import { render } from "react-dom";

const Root = ({ store }) =>
  <Router>
    <div>
      <Route path="/" component={App} />
      {/* <Route path="/Monitor" component={Monitor} /> */}
      {/* <Route path="/Log" component={Monitor} />
      <Route path="/Download" component={Monitor} /> */}
    </div>
  </Router>;

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
