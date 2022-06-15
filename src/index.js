import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// Provider
import ContextApi from "./Context/ContextApi/Provider";
// Components
import App from "./App";
// Styles
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ContextApi>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextApi>
  </React.StrictMode>,
  document.getElementById("root")
);
