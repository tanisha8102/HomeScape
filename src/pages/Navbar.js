import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/transparent_logo.png";
import "./HomePage.css";

const Navbar = ({ categories = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Dropdown items for specific categories
  const dropdownItems = {
    Furniture: [
      { label: "Living Room Furniture", link: "#" },
      { label: "Office Chairs", link: "#" },
      { label: "Sofas", link: "#" },
      { label: "Coffee Tables", link: "#" },
      { label: "Storage Solutions", link: "#" },
    ],
    "Home Decor": [
      { label: "Wall Art", link: "#" },
      { label: "Curtains", link: "#" },
      { label: "Mirrors", link: "#" },
      { label: "Clocks", link: "#" },
      { label: "Rugs", link: "#" },
      { label: "Throw Pillows", link: "#" },
    ],
    // Add dropdown items for other categories as needed
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logoImage} alt="Logo" />
        </a>
      </div>
      <button
        className={`nav-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
        {categories.map((item, index) => (
          <li key={index} className="nav-item">
            <a
              href={
                item === "About Us"
                  ? "/about-us"
                  : item === "All Products"
                  ? "/product"
                  : item === "FAQs"
                  ? "/faq"
                  : "#"
              }
            >
              {item}
            </a>
            {dropdownItems[item] && ( // Conditionally render dropdown only if items exist
              <div className="dropdown">
                <div className="dropdown-content">
                  <ul>
                    {dropdownItems[item].map((dropdownItem, idx) => (
                      <li key={idx}>
                        <a href={dropdownItem.link}>{dropdownItem.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
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
