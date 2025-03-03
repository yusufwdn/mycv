import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Experience from "./pages/Experience";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import ScrollToTop from "./hooks/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/technologies" Component={Technology}></Route>
          <Route path="/experience" Component={Experience}></Route>
          <Route path="/portofolio" Component={Portofolio}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
