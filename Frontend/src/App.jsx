import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Experience from "./components/Experience";
import Project from "./components/Project";
import { Footer } from "./components/Footer";
import Tool from "./components/Tool";
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <NavBar />
        <Intro />
        <About />
        <Tool />
        <Experience />
        <Project />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
