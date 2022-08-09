import React from "react";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { Route, Routes, } from "react-router-dom";
import Home from "./components/Home";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtransaction" element={<AddTransaction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
