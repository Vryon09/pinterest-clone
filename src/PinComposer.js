import ChooseFile from "./ChooseFile";
import PostingForm from "./PostingForm";

export default function PinComposer({
  drafts,
  numCheckedItems,
  isBoardsMenuActive,
  details,
  selectedFile,
  disabled,
  onHandleFileChange,
  onHandleDetails,
}) {
  return (
    <div
      className="pin-composer"
      style={isBoardsMenuActive ? { marginLeft: "351px" } : {}}
    >
      <div
        className="pin-composer-header"
        style={isBoardsMenuActive ? { width: "calc(100% - 351px" } : {}}
      >
        <p>Create Pin</p>
        {selectedFile && <button>Publish</button>}
      </div>

      <div className="pin-creation-area">
        <div
          className="pin-creation-container"
          style={
            isBoardsMenuActive
              ? {
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "100%",
                }
              : {}
          }
        >
          <ChooseFile
            onHandleFileChange={onHandleFileChange}
            selectedFile={selectedFile}
            isBoardsMenuActive={isBoardsMenuActive}
          />
          <PostingForm
            details={details}
            onHandleDetails={onHandleDetails}
            disabled={disabled}
            isBoardsMenuActive={isBoardsMenuActive}
          />
        </div>
      </div>
      <div
        className="white-block"
        style={numCheckedItems !== 0 ? { display: "block" } : {}}
      ></div>
    </div>
  );
}
