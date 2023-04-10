import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Redux from "./pages/Redux";
import ApiCall from "./pages/ApiCall";

import "./App.css";

export default function App() {
  return (
    <div className="background-image">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/redux" element={<Redux />} />
        <Route exact path="/api" element={<ApiCall />} />
      </Routes>
    </div>
  );
}
