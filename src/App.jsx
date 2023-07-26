import Login from "./components/Login";
import Home from "./container/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
