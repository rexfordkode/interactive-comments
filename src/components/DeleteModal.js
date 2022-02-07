import './deleteModal.css';

export const deleteModal = (id, setDeleteComment, data, setData) => {

    const deleteComment = () => {
        let temp = data;
        for (let comment of temp.comments){
            if (comment.id === id) {
                const updatedComments = temp.comments.filter(
                    (comment) => comment.id !== id
                );
        } 
    }

   }

}