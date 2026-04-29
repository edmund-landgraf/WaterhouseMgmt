import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RedesignApp } from "./redesign-app";
import "./redesign.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RedesignApp />
    </BrowserRouter>
  </React.StrictMode>,
);
