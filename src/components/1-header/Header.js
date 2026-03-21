
import { useState, Fragment } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faBars,
  faXmark,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

// Function to add class mode css to body
function classMode(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}

export default function Header() {
  // State for the menu
  const [showMenu, setShowMenu] = useState(false);
  // State for the mode
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "dark");

  function handleMode() {
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    setMode(newMode);
    classMode(newMode);
  }

  // Add class mode css
  classMode(mode);

  const NavBar = () => (
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="https://blog.elmahdijaouali.me/">Article</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </nav>
  );

  return (
    <header>
      <button
        className="btn_menu"
        onClick={() => {
          setShowMenu(true);
        }}
        aria-label="Open menu"
      >
        <FontAwesomeIcon icon={faBars} className="close" />
      </button>
      {showMenu && (
        <aside className="filter_container">
          <div className="menu">
            <ul>
              <li>
                <button
                  className="btn_close"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </li>
              <li>
                <a
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  href="#project"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  href="https://blog.elmahdijaouali.me/"
                >
                  Article
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  href="#contact"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}

      <NavBar />

      <button onClick={handleMode} className="mode" aria-label="Toggle theme">
        {mode === "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon id="sun" icon={faSun} />
        )}
      </button>
    </header>
  );
}
