import {
  faMagnifyingGlass,
  faBell,
  faCommentDots,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pinterestLogo from "./pinterest-logo.svg";

export default function Nav({ isActive, setIsActive }) {
  return (
    <nav style={isActive === "create" ? { position: "fixed", top: 0 } : {}}>
      <div className="nav-bar">
        <button className="logo" onClick={() => setIsActive("home")}>
          <img
            src={pinterestLogo}
            alt="pinterest-logo"
            style={{ height: "24px", width: "24px" }}
          />
        </button>
        <button
          className={`home-button ${
            isActive === "home" ? "active-button" : ""
          } `}
          onClick={() => setIsActive("home")}
        >
          Home
        </button>
        <button
          className={`create-button ${
            isActive === "create" ? "active-button" : ""
          } `}
          onClick={() => setIsActive("create")}
        >
          Create
        </button>
        <div className="search-bar">
          <div className="search-icon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#767676" }}
            />
          </div>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="nav-buttons">
          <button className="notifications">
            <FontAwesomeIcon icon={faBell} size="2xl" />
          </button>
          <button className="messages">
            <FontAwesomeIcon icon={faCommentDots} size="2xl" />
          </button>
          <button className="profile">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
          <button className="options">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    </nav>
  );
}
