import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Homepage from "./Pages/Index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Homepage />
    <Footer />
  </React.StrictMode>
);
