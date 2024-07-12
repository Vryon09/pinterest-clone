import { useState } from "react";
import PinComposer from "./PinComposer";
import Boards from "./Boards";

export default function Create({ isActive }) {
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
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);

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
          checked: false,
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

  function handleChecked(id, e) {
    handleIsChecked(e);

    setDrafts((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, checked: !card.checked } : card
      )
    );
  }

  const numCheckedItems = drafts.filter((draft) => draft.checked).length;

  function handleSelectAll(e) {
    setIsSelectAllChecked(e.target.checked);
    if (!isSelectAllChecked) {
      setDrafts((prevDrafts) =>
        prevDrafts.map((draft) => {
          return { ...draft, checked: true };
        })
      );
    }

    if (isSelectAllChecked) {
      setDrafts((prevDrafts) =>
        prevDrafts.map((draft) => {
          return { ...draft, checked: false };
        })
      );
    }
  }

  function handleIsChecked(e) {
    if ((numCheckedItems > 1 || numCheckedItems === 0) && e.target.checked)
      setIsSelectAllChecked(true);

    if (numCheckedItems === 1 && !e.target.checked)
      setIsSelectAllChecked(false);
  }

  //If there is no checked draft, the select all checkbox should be unchecked
  return (
    <div
      className="create"
      style={isActive === "home" ? { display: "none" } : {}}
    >
      <Boards
        isBoardsMenuActive={isBoardsMenuActive}
        setIsBoardsMenuActive={setIsBoardsMenuActive}
        drafts={drafts}
        currentDraftIndex={currentDraftIndex}
        numCheckedItems={numCheckedItems}
        isSelectAllChecked={isSelectAllChecked}
        onHandleCreateNew={handleCreateNew}
        onHandleClickDraft={handleClickDraft}
        onHandleChecked={handleChecked}
        onHandleSelectAll={handleSelectAll}
      />

      <PinComposer
        drafts={drafts}
        numCheckedItems={numCheckedItems}
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
