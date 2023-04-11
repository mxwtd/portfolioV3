import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const closeMenuOnDocumentClick = (event) => {
      if (showMenu && !event.target.closest(".menu") && !event.target.closest(".hamburger-menu")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenuOnDocumentClick);

    return () => {
      document.removeEventListener("click", closeMenuOnDocumentClick);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`menu bg-stone-700 p-2 rounded-box ${showMenu ? "show" : ""}`}>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
