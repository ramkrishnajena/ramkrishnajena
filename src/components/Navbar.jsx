import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import CallIcon from "@mui/icons-material/Call";
import { MenuOpen, MenuOutlined } from "@mui/icons-material";
import "./styles/navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function openMenu() {
    setMenu(!menu);
  }
  const [active, setActive] = useState(false);
  function activeMenu() {
    setMenu(!active);
  }
  return (
    <>
      <div className={!menu ? "navbar" : "none"}>
        <div className="navbar__logo">
          <h3>R</h3>
        </div>
        <div className="navbar__menu">
          <ul>
            <li className="nav__link active">
              <a href="#home">
                <HomeIcon />
              </a>
            </li>

            <li className="nav__link">
              <a href="#about" className="">
                <PersonIcon />
              </a>
            </li>
            <li className="nav__link">
              <a href="#portfolio">
                <DescriptionIcon />
              </a>
            </li>
            <li className="nav__link">
              <a href="#skill">
                <WorkIcon />
              </a>
            </li>
            <li className="nav__link">
              <a href="#blog">
                <WebAssetIcon />
              </a>
            </li>
            <li className="nav__link">
              <a href="#contact">
                <CallIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="home__mobile--menu" onClick={openMenu}>
        {!menu ? <MenuOpen /> : <MenuOutlined />}
      </div>
    </>
  );
};

export default Navbar;
