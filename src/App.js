import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Formations from "./Components/Formations";
import Experiences from "./Components/Experiences";
import Projets from "./Components/Projets";
import Certifications from "./Components/Certifications";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/project" element={<Projets />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
