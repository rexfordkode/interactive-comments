<<<<<<< HEAD
import "./newComment.css";
let reply;

export default function NewReply({
  setNewReply,
  parentId,
  addNewReply,
  currentUser,
}) {
=======
import React from "react";
import "./newComment.css";
let reply;

const NewReply = ({ setNewReply, parentId, addNewReply, currentUser }) => {
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
          onChange={(e) => {
            reply = e.target.value;
          }}
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
<<<<<<< HEAD
}
=======
};

export default NewReply;
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
