import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

import { BrowserRouter } from "react-router-dom";
// import ShopContextProvider, { ShopContext } from "./context/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);