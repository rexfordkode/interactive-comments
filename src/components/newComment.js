import React, { useState } from "react";
import './newComment.css';

const NewComment = ({ addNewComment, currentUser }) => {
    const [newComment, setNewComment] = useState('');

    return (
        <div className='newComment'>
            <div className='avatarColumn'>
                <img className='avatarReply' src={currentUser.image.png} alt='current user avatar'/>
            </div>
            
            <div className='inputColumn'>
                <textarea 
                className='replyInput'
                placeholder='Add a comment...'
                onChange={(e) => {setNewComment(e.target.value)}}
                ></textarea>
            </div>
            
            <div className='sendColumn'>
                <button className='sendButton' onClick={() => {addNewComment(newComment)}}>SEND</button>
            </div>
        </div>
    )
}

export default NewComment;