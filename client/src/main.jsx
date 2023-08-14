import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";
import Dashboard from "./Dashboard.jsx";
import Inventory from "./Inventory.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LogIn />
    <SignUp />
    <Dashboard /> 
    {/* <Inventory /> */}
    {
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    }
  </React.StrictMode>,
);
