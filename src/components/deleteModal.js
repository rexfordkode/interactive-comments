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