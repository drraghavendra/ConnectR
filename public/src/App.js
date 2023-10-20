import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
