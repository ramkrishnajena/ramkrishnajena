import "./App.css";
import { useContext } from "react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import AboutMe from "./pages/AboutMe";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { useMenuContext } from "./context/useMenuContext";
function App() {
  const menuContext = useContext(useMenuContext);
  return (
    <div className='main'>
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
