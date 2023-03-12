import "./App.css";
import { useContext } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useMenuContext } from "./context/useMenuContext";
function App() {
  const menuContext = useContext(useMenuContext);
  return (
    <div className="main">
      <useMenuContext.Provider value={{ staus: false }}>
        <Navbar />
        <Home />
        <AboutMe />
        <Skill />
        <Portfolio />
        <Contact />
      </useMenuContext.Provider>
    </div>
  );
}

export default App;
