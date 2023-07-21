import Logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <a>
        <img src={Logo} alt="Logo" />
      </a>

      <button
        className="mobile"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleClick}
      >
        {isMenuOpen ? (
          <img
            className="icon-close"
            src={iconClose}
            alt="Close Menu"
            aria-hidden="true"
          />
        ) : (
          <img
            className="icon-hamburger"
            src={iconMenu}
            alt="Open Menu"
            aria-hidden="true"
          />
        )}

        <span className="visually-hidden">Menu</span>
      </button>
      <nav className="primary-navigation desktop" id="primary-navigation">
        <ul aria-label="Primary" role="list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">New</a>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Trending</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
