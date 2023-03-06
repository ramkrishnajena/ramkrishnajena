import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <AboutMe />
      <Skill />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
