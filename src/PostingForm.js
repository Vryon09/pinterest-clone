export default function PostingForm({
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
