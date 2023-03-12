import React, { useContext, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import CallIcon from "@mui/icons-material/Call";
import { MenuOpen, MenuOutlined } from "@mui/icons-material";
import "./styles/navbar.css";
import { useMenuContext } from "../context/useMenuContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(0);
  const openMenu = () => setMenu(!menu);
  const [active, setActive] = useState("#home");

  return (
    <>
      <div className={!menu ? "navbar" : "none"}>
        <div className="navbar__logo">
          <h3 className="text-pop-up-top">R</h3>
        </div>
        <nav className="navbar__menu">
          <ul>
            <li
              className={active === "#home" ? "active nav__link" : "nav__link"}
            >
              <a href="/#home" onClick={() => setActive("#home")}>
                <HomeIcon />
                {/* {menu} */}
              </a>
            </li>

            <li
              className={active === "#about" ? "active nav__link" : "nav__link"}
            >
              <a href="/#about" onClick={() => setActive("#about")}>
                <PersonIcon />
              </a>
            </li>
            <li
              className={
                active === "#education" ? "active nav__link" : "nav__link"
              }
            >
              <a href="#education" onClick={() => setActive("#education")}>
                <DescriptionIcon />
              </a>
            </li>
            <li
              className={
                active === "#portfolio" ? "active nav__link" : "nav__link"
              }
            >
              <a href="#portfolio" onClick={() => setActive("#portfolio")}>
                <WorkIcon />
              </a>
            </li>
            <li
              className={active === "#blog" ? "active nav__link" : "nav__link"}
            >
              <a href="#blog" onClick={() => setActive("#blog")}>
                <WebAssetIcon />
              </a>
            </li>
            <li
              className={
                active === "#contact" ? "active nav__link" : "nav__link"
              }
            >
              <a href="#contact" onClick={() => setActive("#contact")}>
                <CallIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home__mobile--menu" onClick={openMenu}>
        {!menu ? <MenuOpen /> : <MenuOutlined />}
      </div>
    </>
  );
};

export default Navbar;
