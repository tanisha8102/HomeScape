import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/transparent_logo.png";
import "./HomePage.css"; // Create a separate CSS file if needed

const categories = [
    "Furniture", "Home Decor", "Mattresses", "Sofas & Seatings", "Lamp and Lighting", "Furnishings", "Luxury"
  ];

const Navbar = ({ categories }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">
      <a href="/">
          <img src={logoImage} alt="Logo" />
        </a>
      </div>
      <button className={`nav-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
        {categories.map((item, index) => (
          <li key={index} className="nav-item">
            <a href="#">{item}</a>
            <div className="dropdown">
              <div className="dropdown-content">
                {/* Render dropdown menus dynamically */}
                {item === "Furniture" && (
              <ul>
                <li><a href="#">Living Room Furniture</a></li>
                <li><a href="#">Office Chairs</a></li>
                <li><a href="#">Sofas</a></li>
                <li><a href="#">Coffee Tables</a></li>
                <li><a href="#">Storage Solutions</a></li>
              </ul>
            )}
            {item === "Home Decor" && (
              <ul>
                <li><a href="#">Wall Art</a></li>
                <li><a href="#">Curtains</a></li>
                <li><a href="#">Mirrors</a></li>
                <li><a href="#">Clocks</a></li>
                <li><a href="#">Rugs</a></li>
                <li><a href="#">Throw Pillows</a></li>
              </ul>
            )}
            {item === "Mattresses" && (
              <ul>
                <li><a href="#">Memory Foam</a></li>
                <li><a href="#">Spring Mattress</a></li>
                <li><a href="#">Hybrid Mattress</a></li>
                <li><a href="#">Latex Mattress</a></li>
                <li><a href="#">King Size Mattress</a></li>
                <li><a href="#">Queen Size Mattress</a></li>
              </ul>
            )}
            {item === "Sofas & Seatings" && (
              <ul>
                <li><a href="#">Sectional Sofas</a></li>
                <li><a href="#">Loveseats</a></li>
                <li><a href="#">Recliners</a></li>
                <li><a href="#">Chaises</a></li>
                <li><a href="#">Ottomans</a></li>
              </ul>
            )}
            {item === "Lamp and Lighting" && (
              <ul>
                <li><a href="#">Table Lamps</a></li>
                <li><a href="#">Floor Lamps</a></li>
                <li><a href="#">Ceiling Lights</a></li>
                <li><a href="#">Wall Sconces</a></li>
                <li><a href="#">Pendant Lights</a></li>
                <li><a href="#">Chandeliers</a></li>
                <li><a href="#">Desk Lamps</a></li>
              </ul>
            )}
            {item === "Furnishings" && (
              <ul>
                <li><a href="#">Bedding</a></li>
                <li><a href="#">Curtains</a></li>
                <li><a href="#">Cushions</a></li>
                <li><a href="#">Rugs & Mats</a></li>
                <li><a href="#">Throw Blankets</a></li>
              </ul>
            )}
            {item === "Luxury" && (
              <ul>
                <li><a href="#">Designer Furniture</a></li>
                <li><a href="#">Luxury Lighting</a></li>
                <li><a href="#">High-End Decor</a></li>
                <li><a href="#">Exclusive Mattresses</a></li>
                <li><a href="#">Premium Sofas</a></li>
                <li><a href="#">Luxury Bedding</a></li>
              </ul>
            )}
                {/* Add other categories dynamically */}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="icons">
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
