import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Kamba from "./pages/Kamba";
import Nyamwezi from "./pages/Nyamwezi";
import Kikuyu from "./pages/Kikuyu";
import Sukuma from "./pages/Sukuma";
import Banyakole from "./pages/Banyakole";
import Buganda from "./pages/Buganda";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="container">
      <header className="header fade-in">
        <h1>Traditional Cultures of East Africa</h1>
      </header>

      {location.pathname !== "/" && (
        <nav className="nav tribe-nav">
          <Link className="nav-home" to="/">Home</Link>
          <Link className="nav-kamba" to="/kamba">Kamba</Link>
          <Link className="nav-kikuyu" to="/kikuyu">Kikuyu</Link>
          <Link className="nav-nyamwezi" to="/nyamwezi">Nyamwezi</Link>
          <Link className="nav-chagga" to="/sukuma">Sukuma</Link>
          <Link className="nav-banyakole" to="/banyakole">Banyakole</Link>
          <Link className="nav-buganda" to="/buganda">Buganda</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kamba" element={<Kamba />} />
        <Route path="/nyamwezi" element={<Nyamwezi />} />
        <Route path="/kikuyu" element={<Kikuyu />} />
        <Route path="/sukuma" element={<Sukuma />} />
        <Route path="/banyakole" element={<Banyakole />} />
        <Route path="/buganda" element={<Buganda />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2025 Multimedia East-African Heritage Project</p>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;