import "./newComment.css";
import { useState } from "react";

const NewComment = ({ addNewComment, currentUser }) => {
  const [newComment, setNewComment] = useState("");

  const handleInput = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = () => {
    addNewComment(newComment);
    setNewComment("");
  };

  const handleKeyPress = () => {
    const inputSelect = document.querySelector(".replyInput");
    inputSelect.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        addNewComment(event.target.value);
        setNewComment("");
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
          value={newComment}
          onChange={handleInput}
          onKeyDown={handleKeyPress}
        ></textarea>
      </div>

      <div className="sendColumn">
        <button className="sendButton" onClick={handlePostComment}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default NewComment;
