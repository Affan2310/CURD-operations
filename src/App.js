import React, { useState } from "react"; 
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/Register" element={<Register />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/read" element={<Read />}></Route>
            <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
