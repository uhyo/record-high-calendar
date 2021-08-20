import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const rootNode = document.getElementById("root");
if (rootNode) {
  const root = ReactDOM.createRoot(rootNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
