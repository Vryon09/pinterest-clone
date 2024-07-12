import {
  faArrowUpFromBracket,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Post({ posts }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className="post"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={`${process.env.PUBLIC_URL}/images/${posts}`} alt="content" />

      <div className="hovered-post" style={isHover ? { display: "block" } : {}}>
        <div className="black-fade"></div>

        <button className="save-post-btn">Save</button>

        <div className="post-buttons">
          <button className="download-button">
            <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" />
          </button>
          <button className="ellipsis-button">
            <FontAwesomeIcon icon={faEllipsis} size="lg" />
          </button>
        </div>
      </div>
    </li>
  );
}
