
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarLayout from "./pages/NavbarLayout";
import CounterApp from "./components/CounterApp";
import TodoList from "./components/TodoList";
import About from "./components/About";
import Background from "./components/BackgroundChanger";

function App() {
  return (
    <div>
      <NavbarLayout/>
  
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/background" element={<Background />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
