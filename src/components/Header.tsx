import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function Header() {
  const navLinks = [
    { name: "What is Chaplean", link: "/" },
    { name: "Our difference", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Docs", link: "/" },
  ];
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="Brand Logo" />
        </Link>
        <nav>
          <button className="header-hamburger-btn">Menu</button>
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <Link to={navLink.link}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
          <button className="header-contact-btn">Contact Us</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
