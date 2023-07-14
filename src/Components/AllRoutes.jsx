import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";


import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Todo from "./Todo/Todo";
import Movies from './Movies/Movies'
import Navigation from './Pages/Navigation'
import Shoping from "./Pages/Shoping";

export default function AllRoutes() {
  return (
    <Routes>
       <Route path="*" element={<Shoping />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/movies" element={<Movies />} />
      <Route path="/navigation" element={<Navigation />} />
    </Routes>
  );
}
