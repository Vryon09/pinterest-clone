import pinterestLogo from "./pinterest-logo.svg";
import {
  faMagnifyingGlass,
  faBell,
  faCommentDots,
  faUser,
  faChevronDown,
  faArrowUpFromBracket,
  faEllipsis,
  faAnglesRight,
  faPlus,
  faCircleUp,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const posts = [
  {
    id: 1,
    image: "image-1.jpg",
  },
  {
    id: 2,
    image: "image-2.jpg",
  },
  {
    id: 3,
    image: "image-3.jpg",
  },
  {
    id: 4,
    image: "image-4.jpg",
  },
  {
    id: 5,
    image: "image-5.jpg",
  },
  {
    id: 6,
    image: "image-6.jpg",
  },
  {
    id: 7,
    image: "image-7.jpg",
  },
  {
    id: 8,
    image: "image-8.jpg",
  },
  {
    id: 9,
    image: "image-9.jpg",
  },
  {
    id: 10,
    image: "image-10.jpg",
  },
  {
    id: 11,
    image: "image-11.jpg",
  },
  {
    id: 12,
    image: "image-12.jpg",
  },
  {
    id: 13,
    image: "image-13.jpg",
  },
  {
    id: 14,
    image: "image-14.jpg",
  },
  {
    id: 15,
    image: "image-15.jpg",
  },
  {
    id: 16,
    image: "image-16.jpg",
  },
  {
    id: 17,
    image: "image-17.jpg",
  },
  {
    id: 18,
    image: "image-18.jpg",
  },
  {
    id: 19,
    image: "image-19.jpg",
  },
  {
    id: 20,
    image: "image-20.jpg",
  },
  {
    id: 21,
    image: "image-21.jpg",
  },
  {
    id: 22,
    image: "image-22.jpg",
  },
  {
    id: 23,
    image: "image-23.jpg",
  },
  {
    id: 24,
    image: "image-24.jpg",
  },
  {
    id: 25,
    image: "image-25.jpg",
  },
  {
    id: 26,
    image: "image-26.jpg",
  },
  {
    id: 27,
    image: "image-27.jpg",
  },
  {
    id: 28,
    image: "image-28.jpg",
  },
  {
    id: 29,
    image: "image-29.jpg",
  },
  {
    id: 30,
    image: "image-30.jpg",
  },
];

function App() {
  const [isActive, setIsActive] = useState("home");

  return (
    <>
      <Nav isActive={isActive} setIsActive={setIsActive} />
      <Content isActive={isActive} />
      <Create isActive={isActive} />
    </>
  );
}

function Nav({ isActive, setIsActive }) {
  return (
    <nav style={isActive === "create" ? { position: "fixed", top: 0 } : {}}>
      <div className="nav-bar">
        <button className="logo">
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

function Content({ isActive }) {
  return (
    <div
      className="content"
      style={isActive === "create" ? { display: "none" } : {}}
    >
      <ul className="posts">
        {posts.map((post) => (
          <Post posts={post.image} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

function Post({ posts }) {
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

function Create({ isActive }) {
  const [details, setDetails] = useState({
    title: "",
    description: "",
    link: "",
    board: "",
    tags: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [drafts, setDrafts] = useState([]);
  const [isBoardsMenuActive, setIsBoardsMenuActive] = useState(false);
  const [currentDraftIndex, setCurrentDraftIndex] = useState(null);

  function handleDetails(e) {
    const { name, value } = e.target;

    setDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, [name]: value };

      if (currentDraftIndex !== null) {
        setDrafts((prevDrafts) => {
          const updatedDrafts = [...prevDrafts];
          updatedDrafts[currentDraftIndex] = {
            ...updatedDrafts[currentDraftIndex],
            ...updatedDetails,
          };
          return updatedDrafts;
        });
      }

      return updatedDetails;
    });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedFile(reader.result);
      setDisabled(false);

      setDrafts((prev) => [
        ...prev,
        {
          id: Date.now(),
          image: reader.result,
          title: details.title,
          description: details.description,
          link: details.link,
          board: details.board,
          tags: details.tags,
        },
      ]);
      setCurrentDraftIndex(drafts.length);
    };

    if (file) reader.readAsDataURL(file);
  }

  function handleCreateNew() {
    setSelectedFile(null);
    setDetails({
      title: "",
      description: "",
      link: "",
      board: "",
      tags: "",
    });
    setDisabled(true);
    setCurrentDraftIndex(null);
  }

  function handleClickDraft(index) {
    const selectedDraft = drafts[index];
    setCurrentDraftIndex(index);
    setDetails(() => {
      const updatedDetails = {
        title: selectedDraft.title,
        description: selectedDraft.description,
        link: selectedDraft.link,
        board: selectedDraft.board,
        tags: selectedDraft.tags,
      };
      return updatedDetails;
    });
    setSelectedFile(selectedDraft.image);
    setDisabled(false);
  }

  return (
    <div
      className="create"
      style={isActive === "home" ? { display: "none" } : {}}
    >
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
              <button onClick={handleCreateNew}>
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
                  onClick={handleCreateNew}
                >
                  Create new
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className="drafts-container"
          style={!isBoardsMenuActive ? { display: "none" } : {}}
        >
          {drafts.map((draft, i) => (
            <div
              className={`draft ${
                i === currentDraftIndex ? "active-draft" : ""
              } `}
              key={draft.id}
              onClick={() => handleClickDraft(i)}
            >
              <Draft image={draft.image} title={draft.title} alt={i} />
            </div>
          ))}
        </div>
      </div>

      <PinComposer
        isBoardsMenuActive={isBoardsMenuActive}
        details={details}
        disabled={disabled}
        selectedFile={selectedFile}
        onHandleFileChange={handleFileChange}
        onHandleDetails={handleDetails}
      />
    </div>
  );
}

//The draft should set after uploading a photo or a file, and somehow the input and the draft is connected
function Draft({ image, title }) {
  return (
    <>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <p style={{ fontSize: "14px", fontWeight: "500" }}>{title}</p>
        <p style={{ fontSize: "14px", color: "#767676" }}>
          30 days until expiration
        </p>
      </div>
    </>
  );
}

function PinComposer({
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
      <div className="pin-composer-header">
        <p>Create Pin</p>
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
    </div>
  );
}

function ChooseFile({ onHandleFileChange, selectedFile, isBoardsMenuActive }) {
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

function PostingForm({
  details,
  onHandleDetails,
  disabled,
  isBoardsMenuActive,
}) {
  return (
    <form
      className="posting-form"
      style={isBoardsMenuActive ? { width: "60%" } : {}}
    >
      <p style={disabled ? { color: "#cdcdcd" } : {}}>Title</p>
      <input
        name="title"
        type="text"
        placeholder="Add a title"
        value={details.title}
        onChange={onHandleDetails}
        disabled={disabled}
      />
      <p style={disabled ? { color: "#cdcdcd" } : {}}>Description</p>
      <input
        name="description"
        type="text"
        className="input-description"
        placeholder="Add a detailed description"
        value={details.description}
        onChange={onHandleDetails}
        disabled={disabled}
      />
      <p style={disabled ? { color: "#cdcdcd" } : {}}>Link</p>
      <input
        name="link"
        type="text"
        placeholder="Add a link"
        value={details.link}
        onChange={onHandleDetails}
        disabled={disabled}
      />
      <p style={disabled ? { color: "#cdcdcd" } : {}}>Board</p>
      <input
        name="board"
        type="text"
        placeholder="Choose a board"
        value={details.board}
        onChange={onHandleDetails}
        disabled={disabled}
      />
      <p style={disabled ? { color: "#cdcdcd" } : {}}>Tagged topic (0)</p>
      <input
        name="tags"
        type="text"
        placeholder="Search for a tag"
        value={details.tags}
        onChange={onHandleDetails}
        disabled={disabled}
      />
    </form>
  );
}

export default App;
