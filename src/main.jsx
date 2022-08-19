import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import "./index.css";
import "./setupi18n";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
