import React, { useState, useEffect } from "react";
import "./App.css";
import Comment from "./components/comment";
import DeleteModal from "./components/deleteModal";
import NewComment from "./components/newComment";
import JSONdata from "./data.json";
let currentId = 5;

const App = () => {
  const [data, setData] = useState(JSONdata);
  const [deleteComment, setDeleteComment] = useState(false);

  // Gets data from Local storage upon reload
  useEffect(() => {
    return localStorage.getItem("comments") !== null
      ? setData(JSON.parse(localStorage.getItem("comments")))
      : data;
  }, []);

  //Stores data in the Local Storage
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(data));
  }, [data]);

  // Add new reply
  const addNewReply = (id, content) => {
    if (!/\S/.test(content)) return;
    let temp = data;
    currentId += 1;
    for (let comment of temp.comments) {
      if (comment.id === id) {
        comment.replies.push({
          id: currentId + 1,
          content: content,
          createdAt: new Date().toLocaleString("en-us", {
            hour: "numeric",
            minute: "numeric",
          }),
          score: 0,
          replyingTo: comment.user.username,
          user: { ...data.currentUser },
        });
        break;
      }
      if (comment.replies.length > 0) {
        for (let reply of comment.replies) {
          if (reply.id === id) {
            comment.replies.push({
              id: currentId + 1,
              content: content,
              createdAt: new Date().toLocaleString("en-us", {
                hour: "numeric",
                minute: "numeric",
              }),
              score: 0,
              replyingTo: reply.user.username,
              user: { ...data.currentUser },
            });
            break;
          }
        }
      }
    }
    setData({ ...temp });
  };

  // Update score
  const updateScore = (id, action) => {
    let temp = data;
    for (let comment of temp.comments) {
      if (comment.id === id) {
        action === "upvote" ? (comment.score += 1) : (comment.score -= 1);
        break;
      }
      if (comment.replies.length > 0) {
        for (let reply of comment.replies) {
          if (reply.id === id) {
            action === "upvote" ? (reply.score += 1) : (reply.score -= 1);
            break;
          }
        }
      }
    }
    setData({ ...temp });
  };

  // Update comment
  const updateComment = (updatedContent, id) => {
    let temp = data;
    for (let comment of temp.comments) {
      if (comment.id === id) {
        comment.content = updatedContent;
        break;
      }
      if (comment.replies.length > 0) {
        for (let reply of comment.replies) {
          if (reply.id === id) {
            reply.content = updatedContent;
            break;
          }
        }
      }
    }

    setData({ ...temp });
  };

  // Add/Post new comment
  const addNewComment = (content) => {
    if (!/\S/.test(content)) return;
    let temp = data;
    currentId += 1;
    temp.comments.push({
      id: currentId + 1,
      content: content,
      createdAt: new Date().toLocaleString("en-us", {
        hour: "numeric",
        minute: "numeric",
      }),
      score: 0,
      user: { ...data.currentUser },
      replies: [],
    });
    setData({ ...temp });
  };

  return (
    <>
      {deleteComment !== false && (
        <DeleteModal
          id={deleteComment}
          setDeleteComment={setDeleteComment}
          setData={setData}
          data={data}
        />
      )}

      <main className="comments-column">
        {data.comments.map((comment) => {
          return (
            <Comment
              replyingTo=""
              addNewReply={addNewReply}
              updateComment={updateComment}
              setDeleteComment={setDeleteComment}
              updateScore={updateScore}
              key={comment.id}
              currentUser={data.currentUser}
              comment={comment.content}
              image={comment.user.image.png}
              username={comment.user.username}
              timeSince={comment.createdAt}
              score={comment.score}
              replies={comment.replies}
              id={comment.id}
            />
          );
        })}
        <NewComment
          addNewComment={addNewComment}
          currentUser={data.currentUser}
        />
      </main>
    </>
  );
};

export default App;
