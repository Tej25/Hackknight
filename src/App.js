import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Organs from "./components/Organs";
function App() {
  return (
    <BrowserRouter>
      <nav className="h-16 flex justify-end items-center">
        <Link
          to={"/organs"}
          className="py-2 px-4  mx-2 text-white font-[inter] text-sm font-medium hover:text-sky-400"
        >
          Organs
        </Link>
        <Link
          to={"/"}
          className="py-2 px-4 font-[inter] text-sm mx-2 text-white font-medium hover:text-sky-400"
        >
          Login
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/organs" element={<Organs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
