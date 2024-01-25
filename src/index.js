import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import ContexProvider from "./components/Contex/ContexProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContexProvider>
    <App />
  </ContexProvider>
);

reportWebVitals();
