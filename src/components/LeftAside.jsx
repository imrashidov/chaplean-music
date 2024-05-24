import social from "/social.svg";
import { IoChevronDown } from "react-icons/io5";
function LeftAside() {
  return (
    <aside className="left-aside">
      <div className="container">
        <div className="left-social">
          <img src={social} alt="Chaplean Logo" />
          <div className="left-social-text">
            <p>Chaplean App</p>
            <p>Social media platform</p>
          </div>
          <button className="left-social-button">
            <i>
              <IoChevronDown />
            </i>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default LeftAside;
