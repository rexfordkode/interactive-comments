import "./deleteModal.css";

const DeleteModal = (id, setDeleteComment, data, setData) => {
  const deleteComment = (id) => {
    let temp = data;
    for (let comment of temp.comments) {
      if (comment.id === id) {
        temp.comments = temp.comments.filter(
          (filComment) => filComment.id !== id
        );
        break;
      } else {
        if (comment?.replies?.length > 0) {
          findCommentToDelete(comment, comment.replies, id);
        }
      }
    }
    setData({ ...temp });
  };
  const findCommentToDelete = (parent, replies, id) => {
    let temp = parent;
    for (let reply of replies) {
      if (reply.id === id) {
        temp.replies = temp.replies.filter(
          (filComment) => filComment.id !== id
        );
        break;
      } else {
        if (reply?.replies?.length > 0) {
          findCommentToDelete(reply, reply.replies, id);
        }
      }
    }
  };

<<<<<<< HEAD
      return (
        <div className="modalBackground">
      <div className="modal">
        <div className="modalTitle">Delete comment</div>
        <div>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </div>
        <div className="buttonsRow">
          {/* changed <span> into <button> */}
          {/* added a button class */}
          <button
            id="cancel"
            className="buttonsRow__buttons "
            onClick={() => setDeleteComment(false)}
          >
            NO, CANCEL
          </button>
          <button
            id="confirm"
            className="buttonsRow__buttons "
            onClick={() => deleteComment()}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
        
      );

}
=======
  return (
    <div className="deleteModal">
      <div className="deleteModalBox">
        <h2 className="deleteModalTitle">Delete comment</h2>
        <p className="deleteModalText">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="deleteModalButtonsContainer">
          <button
            className="deleteModalButton cancelDeleteButton mouse-pointer"
            onClick={() => setDeleteComment(false)}
          >
            NO, CANCEL
          </button>
          <button
            className="deleteModalButton confirmDeleteButton mouse-pointer"
            onClick={() => {
              deleteComment(deleteComment.id);
              setDeleteComment(false);
            }}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
>>>>>>> bde38233548d53ca3abf13a2ef5b789793562c58
