import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./Components/Layout";
import Deatails from "./pages/Details/Deatails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":name" element={<Deatails />} />
      </Route>
    </Routes>
  );
}

export default App;
