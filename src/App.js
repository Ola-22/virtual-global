import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Forum from "./Pages/Forum";
import Details from "./Pages/Details";
import ML from "./Pages/ML";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/1" element={<Details />} />
          <Route path="/ml" element={<ML />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
