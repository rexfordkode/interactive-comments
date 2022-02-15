import { useEffect, useState } from "react";
import NewReply from "./newReply";
import "./comment.css";

<<<<<<< HEAD
export default function Comment({
=======
const Comment = ({
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
  id,
  currentUser,
  replyingTo,
  comment,
  image,
  username,
  timeSince,
  score,
  replies,
  updateScore,
  updateComment,
  setDeleteComment,
  addNewReply,
<<<<<<< HEAD
}) {
  const [newReply, setNewReply] = useState(false);
  const [vote, setVote] = useState(false);
=======
}) => {
  const [newReply, setNewReply] = useState(false);
  //   modified
  const [vote, setVote] = useState(false);

  const [iconPlusFill, setIconPlusFill] = useState("#c5c6ef");
  const [iconMinusFill, setIconMinusFill] = useState("#c5c6ef");

>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState(false);

  // Evaluate to true or false and then render HTML accordingly
  useEffect(() => {
    const curr = username === currentUser.username;
    setCurrent(curr);
  }, [currentUser, username]);

<<<<<<< HEAD
=======
  //

>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
  return (
    <>
      {
        <div className="comment">
          <div className="scoreColumn">
            {
<<<<<<< HEAD
              // disable voting function for user's own comments
              current ? (
                <>
                  <img
                    className="flex-item upvote disabled-upvote"
                    src="./images/icon-plus.svg"
                    alt="upvote"
                  />
                  <span className="flex-item">{score}</span>
                  <img
                    className="flex-item downvote disabled-upvote"
                    src="./images/icon-minus.svg"
                    alt="downvote"
                  />
                </>
              ) : (
                <>
                  <img
                    className="flex-item upvote"
                    src="./images/icon-plus.svg"
                    alt="upvote"
                    onClick={() => {
                      if (!vote) {
                        updateScore(id, "upvote");
                        setVote(true);
                      }
                    }}
                  />
                  <span className="flex-item">{score}</span>
                  <img
                    className="flex-item downvote"
                    src="./images/icon-minus.svg"
                    alt="downvote"
                    onClick={() => {
                      if (!vote) {
                        updateScore(id, "downvote");
                        setVote(true);
                      }
                    }}
                  />
=======
              // Disable voting function for user's own comments
              current ? (
                <>
                  <div className="flex-item upvote ">
                    <svg
                      width="11"
                      height="11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                        fill="#C5C6EF"
                      />
                    </svg>
                  </div>

                  <span className="flex-item">{score}</span>
                  <div className="flex-item updown">
                    <svg
                      width="11"
                      height="3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                        fill="#C5C6EF"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-item upvote viewervote">
                    <svg
                      width="11"
                      height="11"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        if (!vote) {
                          updateScore(id, "upvote");
                          setVote(true);
                          setIconPlusFill("#C5C6EF");
                          setIconMinusFill("#C5C6EF");
                        }
                      }}
                    >
                      <path
                        d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                        fill={iconPlusFill}
                      />
                    </svg>
                  </div>

                  <span className="flex-item">{score}</span>

                  <div className="flex-item updown viewervote">
                    <svg
                      width="11"
                      height="3"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        if (!vote) {
                          updateScore(id, "downvote");
                          setVote(true);
                          setIconMinusFill("#C5C6EF");
                          setIconPlusFill("#C5C6EF");
                        }
                      }}
                    >
                      <path
                        d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                        fill={iconMinusFill}
                      />
                    </svg>
                  </div>
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
                </>
              )
            }
          </div>
          <div className="contentColumn">
            <div className="commentHeader">
              <img className="avatar" src={image} alt="avatar" />
              <div className="username">{username}</div>
              {current ? <div className="youTag">you</div> : ""}
              <div className="timestamp">{timeSince}</div>
              {current ? (
                edit !== false ? (
                  <>
                    <div className="deleteButton disabled">
                      <img src="./images/icon-delete.svg" alt="delete" />
                      <span> Delete</span>
                    </div>
                    <div className="editButton disabled">
                      <img src="./images/icon-edit.svg" alt="edit" />
                      <span> Edit</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="deleteButton"
                      onClick={() => setDeleteComment(id)}
                    >
                      <img src="./images/icon-delete.svg" alt="delete" />
                      <span> Delete</span>
                    </div>
                    <div
                      className="editButton"
                      onClick={() => setEdit(comment)}
                    >
                      <img src="./images/icon-edit.svg" alt="edit" />
                      <span> Edit</span>
                    </div>
                  </>
                )
              ) : (
                <div
                  className="replyButton"
                  onClick={() => {
                    setNewReply(true);
                  }}
                >
                  <img src="./images/icon-reply.svg" alt="reply" />
                  <span> Reply</span>
                </div>
              )}
            </div>

            {edit !== false ? (
              <>
                <div className="updateInput">
                  <textarea
                    defaultValue={edit}
                    onChange={(e) => {
                      setEdit(e.target.value);
                    }}
                    className="replyInput"
                    placeholder="Add a comment..."
                  />
                </div>

                <div className="updateRow">
                  <button
                    className="updateButton"
                    onClick={() => {
                      updateComment(edit, id);
                      setEdit(false);
                    }}
                  >
                    UPDATE
                  </button>
                </div>
              </>
            ) : (
              <div className="commentContent">
                {replyingTo.length > 0 ? (
                  <span className="reply-username">@{replyingTo} </span>
                ) : (
                  ""
                )}
                {comment}
              </div>
            )}
<<<<<<< HEAD
          </div>{" "}
          {/* contentColumn*/}
          {/* comment*/}
=======
          </div>
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
        </div>
      }
      {newReply !== false && (
        <NewReply
          parentId={id}
          replyingTo={username}
          setNewReply={setNewReply}
          addNewReply={addNewReply}
          currentUser={currentUser}
        />
      )}
      {replies?.length > 0 &&
        replies.map((reply) => {
          return (
            <div className="commentReplies">
              <div className="verticalLine"></div>
              <Comment
                replyingTo={reply.replyingTo}
                addNewReply={addNewReply}
                updateComment={updateComment}
                setDeleteComment={setDeleteComment}
                updateScore={updateScore}
                key={reply.id}
                currentUser={currentUser}
                comment={reply.content}
                image={reply.user.image.png}
                username={reply.user.username}
                timeSince={reply.createdAt}
                score={reply.score}
                replies={reply.replies}
                id={reply.id}
              />
            </div>
          );
        })}
    </>
  );
<<<<<<< HEAD
}
=======
};

export default Comment;
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
