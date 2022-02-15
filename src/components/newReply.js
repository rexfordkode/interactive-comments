import "./newComment.css";
let reply;

const NewReply = ({ setNewReply, parentId, addNewReply, currentUser }) => {
  const handleKeyPress = () => {
    const inputSelect = document.querySelector(".replyInput");
    inputSelect.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        addNewReply(reply);
        setNewReply("");
      }
    });
  };

  return (
    <div className="newComment">
      <div className="avatarColumn">
        <img
          className="avatarReply"
          src={currentUser.image.png}
          alt="current user avatar"
        />
      </div>

      <div className="inputColumn">
        <textarea
          className="replyInput"
          placeholder="Add a comment..."
          onChange={(e) => {
            reply = e.target.value;
          }}
          onKeyDown={handleKeyPress}
        ></textarea>
      </div>

      <div className="sendColumn">
        <button
          className="sendButton"
          onClick={() => {
            addNewReply(parentId, reply);
            setNewReply(false);
          }}
        >
          REPLY
        </button>
      </div>
    </div>
  );
};

export default NewReply;
