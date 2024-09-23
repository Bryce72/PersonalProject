import CoolShit from "./CoolShit";
import Home from "./Home";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/CoolShit/*" element={<CoolShit />} />
        </Routes>
      </div>
    </HashRouter>
  );
}