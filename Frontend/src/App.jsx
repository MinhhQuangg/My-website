import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";
import Tool from "./components/Tool";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <NavBar />

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
