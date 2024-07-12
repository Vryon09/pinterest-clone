import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChooseFile({
  onHandleFileChange,
  selectedFile,
  isBoardsMenuActive,
}) {
  return (
    <div
      className="choose-drag-file"
      style={isBoardsMenuActive ? { alignItems: "center" } : {}}
    >
      <form
        className="box-placeholder"
        style={selectedFile ? { border: "none", height: "fit-content" } : {}}
      >
        {!selectedFile && (
          <>
            <input
              type="file"
              accept="image/*"
              style={{ opacity: 0 }}
              onChange={onHandleFileChange}
            />
            <button>
              <FontAwesomeIcon icon={faCircleUp} size="2xl" />
            </button>
            <p className="instruction-1">
              Choose and file or drag and drop <br /> it here.
            </p>
            <p className="instruction-2">
              We recommend using high quality .jpg files less than 20MB <br />
              or .mp4 files less than 200MB.
            </p>
          </>
        )}
        {selectedFile && <img src={selectedFile} alt="uploaded" />}
      </form>
      {!selectedFile && (
        <button className="url-save-btn"> Save from URL</button>
      )}
    </div>
  );
}
