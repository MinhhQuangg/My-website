import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Tool } from "./components/Tool";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center">
          <NavBar />
        </div>
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
