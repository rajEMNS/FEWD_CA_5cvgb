import "./App.css";
import Forms from './components/Forms'
import BookList from "./components/BookList";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/home" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
