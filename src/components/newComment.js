import "./newComment.css";
import { useState } from "react";

<<<<<<< HEAD
export default function NewComment({ addNewComment, currentUser }) {
  const [newComment, setNewComment] = useState("");

=======
const NewComment = ({ addNewComment, currentUser }) => {
  const [newComment, setNewComment] = useState("");

  const handleInput = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = () => {
    addNewComment(newComment);
    setNewComment("");
  };

>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
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
<<<<<<< HEAD
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
=======
          value={newComment}
          onChange={handleInput}
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
        ></textarea>
      </div>

      <div className="sendColumn">
<<<<<<< HEAD
        <button
          className="sendButton"
          onClick={() => {
            addNewComment(newComment);
          }}
        >
=======
        <button className="sendButton" onClick={handlePostComment}>
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
          SEND
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default NewComment;
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
