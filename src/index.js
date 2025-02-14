import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom-animated.css";
import "./assets/css/default.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/magnific.dark.css";
import "./assets/css/magnific.rtl.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="suspense">Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
