import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Route from './routes/routes'
import todoApp from "./reducers";

let store = createStore(todoApp);


ReactDOM.render(
     <Route store={store} />,
    document.getElementById("root")
);
registerServiceWorker();
