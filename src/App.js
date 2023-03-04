import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <AboutMe />
      <Skill />
      <Portfolio />
    </div>
  );
}

export default App;
