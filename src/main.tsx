import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Providers from "./Providers";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </BrowserRouter>
);
