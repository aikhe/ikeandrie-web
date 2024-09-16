import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/globals.scss";

import Landing from "../layouts/Landing.tsx";

const rootElement = document.getElementById("lenis-root");

if (rootElement) {
  ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
      <Landing />
    </React.StrictMode>,
  );
} else {
  console.error("Error: rootElement is not found");
}
