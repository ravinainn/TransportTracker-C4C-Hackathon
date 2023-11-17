import "./app.css";
import Challan from "./pages/Challan";
import Home from "./pages/home";
import Login from "./components/login";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <section className="front">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/challan" element={<Challan />} />
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;

{
  /* <NavBar />
      <section className="front">
        <Home />
        <Login />
      </section> */
}
