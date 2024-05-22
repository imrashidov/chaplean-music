import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

const MenuButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <motion.button
      onClick={toggleMenu}
      animate={isMenuOpen ? "open" : "closed"}
      className="nav-menu-btn"
    >
      <motion.span
        style={{
          left: "50%",
          top: "33%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
          open: { scale: 0 },
        }}
      />
      <motion.span
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
          open: { rotate: "45deg" },
        }}
      />
      <motion.span
        style={{
          left: "50%",
          bottom: "33%",
          x: "-50%",
          y: "100%",
        }}
        variants={{
          open: {
            rotate: "-45deg",
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            width: "26px",
          },
        }}
      />
    </motion.button>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
