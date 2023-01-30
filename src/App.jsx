import { useEffect, useState } from "react";
// import './App.css'
import { io } from "socket.io-client";
import { Route, Routes } from "react-router";
import Home from "./views/Home";

// const socket = io("http://localhost:3001");
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
