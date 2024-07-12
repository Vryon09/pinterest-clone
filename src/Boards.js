import {
  faAnglesRight,
  faPlus,
  faAnglesLeft,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draft from "./Draft";

export default function Boards({
  isBoardsMenuActive,
  setIsBoardsMenuActive,
  drafts,
  currentDraftIndex,
  numCheckedItems,
  isSelectAllChecked,
  onHandleCreateNew,
  onHandleClickDraft,
  onHandleChecked,
  onHandleSelectAll,
}) {
  return (
    <div
      className="boards"
      style={isBoardsMenuActive ? { width: "350px" } : {}}
    >
      <div className="boards-menu">
        {!isBoardsMenuActive ? (
          <>
            <button
              onClick={() =>
                setIsBoardsMenuActive(
                  (isBoardsMenuActive) => !isBoardsMenuActive
                )
              }
            >
              <FontAwesomeIcon icon={faAnglesRight} size="xl" />
            </button>
            <button onClick={onHandleCreateNew}>
              <FontAwesomeIcon icon={faPlus} size="2xl" />
            </button>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "90%",
                height: "100%",
              }}
            >
              <h3 style={{ fontWeight: "500", fontSize: "20px" }}>
                Pin drafts{" "}
                {drafts.length > 0 ? (
                  <span style={{ fontWeight: "400" }}>({drafts.length})</span>
                ) : (
                  ""
                )}
              </h3>
              <button
                onClick={() =>
                  setIsBoardsMenuActive(
                    (isBoardsMenuActive) => !isBoardsMenuActive
                  )
                }
              >
                <FontAwesomeIcon icon={faAnglesLeft} size="xl" />
              </button>
            </div>
            <div
              style={{
                width: "90%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="create-new-button-text"
                onClick={onHandleCreateNew}
              >
                Create new
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        className="drafts-container"
        style={
          !isBoardsMenuActive
            ? { display: "none" }
            : drafts.length < 4
            ? { justifyContent: "flex-end" }
            : {}
        }
      >
        {drafts.map((draft, i) => (
          <div
            className={`draft ${
              i === currentDraftIndex ? "active-draft" : ""
            } `}
            key={draft.id}
            onClick={() => onHandleClickDraft(i)}
          >
            <Draft
              id={draft.id}
              checked={draft.checked}
              onHandleChecked={onHandleChecked}
              image={draft.image}
              title={draft.title}
              alt={i}
              drafts={drafts}
            />
          </div>
        ))}
      </div>

      <div
        className="board-select"
        style={
          !isBoardsMenuActive || drafts.length < 2 ? { display: "none" } : {}
        }
      >
        <div className="board-select-actions">
          <div
            className={`${
              numCheckedItems === drafts.length
                ? "selected-all"
                : "select-all-checkbox"
            }`}
          >
            <input
              className={`select-all-input `}
              type="checkbox"
              checked={isSelectAllChecked}
              onChange={onHandleSelectAll}
            />
            {numCheckedItems === 0 ? (
              <p>Select all</p>
            ) : (
              <p>
                {numCheckedItems} of {drafts.length}
              </p>
            )}
          </div>
          {drafts.some((draft) => draft.checked === true) && (
            <div className="selected-actions">
              <button>
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>
              <button>
                <FontAwesomeIcon icon={faPen} size="lg" />
              </button>
              <button>Publish</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
