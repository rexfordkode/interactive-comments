<<<<<<< HEAD
import './deleteModal.css';

export const deleteModal = (id, setDeleteComment, data, setData) => {
    
    // function for deleting user comment
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

      return (
        <div className='modalBackground'>
            <div className='modal'>
                <div className='modalTitle'>Delete comment</div>
                <div>Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.</div>
                <div className='buttonsRow'>
                    <span id="cancel" onClick={() => setDeleteComment(false)}>NO, CANCEL</span>
                    <span id="confirm" onClick={() => deleteComment()}>YES, DELETE</span>
                </div>
            </div>
        </div>
    )

}
=======
import "./deleteModal.css";

const DeleteModal = ({ id, setDeleteComment, setData, data }) => {
  const deleteComment = () => {
    for (let comment of data.comments) {
      if (comment.id === id) {
        const updatedComments = data.comments.filter(
          (comment) => comment.id !== id
        );
        setData((data) => ({
          currentUser: { ...data.currentUser },
          comments: updatedComments,
        }));
        break;
      }
      if (comment.replies.length > 0) {
        for (let reply of comment.replies) {
          if (reply.id === id) {
            const updatedReplies = comment.replies.filter(
              (reply) => reply.id !== id
            );

            comment.replies = updatedReplies;

            setData((data) => ({
              currentUser: { ...data.currentUser },
              comments: data.comments,
            }));
            break;
          }
        }
      }
    }
    setDeleteComment(false);
  };

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
};

export default DeleteModal;
>>>>>>> 618263333564604fc89367e44263a26f53abe9bc
