import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloWorld from "./components/HelloWorld";
import Expression from "./components/Expression";
import Attributes from "./components/Attributes";
import "bootstrap/dist/css/bootstrap.min.css";
import FormData from "./components/FormData";
import MyProfile from "./components/MyProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LayoutInit from "./components/LayoutInit";
import ChapterOne from "./components/ChapterOne";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LayoutInit>
      <ChapterOne />
    </LayoutInit>
    {/* <App />
    <HelloWorld />
    <Expression />
    <Attributes />
    <FormData />
    <MyProfile /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
