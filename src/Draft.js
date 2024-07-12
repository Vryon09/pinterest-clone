import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Draft({
  id,
  checked,
  onHandleChecked,
  image,
  title,
  drafts,
}) {
  //The draft should set after uploading a photo or a file, and somehow the input and the draft is connected
  return (
    <>
      {drafts.length > 1 && (
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onHandleChecked(id, e)}
        />
      )}
      <div className="draft-image">
        <img src={image} alt={title} />
      </div>
      <div>
        <p style={{ fontSize: "14px", fontWeight: "500" }}>{title}</p>
        <p style={{ fontSize: "14px", color: "#767676" }}>
          30 days until expiration
        </p>
      </div>
      <button className="draft-ellipsis-button">
        <FontAwesomeIcon icon={faEllipsis} size="xl" />
      </button>
    </>
  );
}
