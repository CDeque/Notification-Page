import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Pages/Index";
import Footer from "./components/Footer/index";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Homepage />
    <Footer />
  </React.StrictMode>
);
