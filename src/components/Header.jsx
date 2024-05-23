import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import logo from "../assets/logo.svg";

function Header() {
  const navLinks = [
    { name: "What is Chaplean", link: "/" },
    { name: "Our difference", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Docs", link: "/" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/">
            <img src={logo} alt="Brand Logo" />
          </Link>
          <nav>
            <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
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
      {/* Nav Mobile Menu */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: isMenuOpen ? 0 : "-300vh" }}
        transition={{ duration: 0.2 }}
        className="mobile-nav-container"
      >
        <nav>
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <Link to={navLink.link}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
          <button>Contact Us</button>
        </nav>
      </motion.div>
    </>
  );
}

export default Header;
