import { useEffect, useState} from 'react';
import NewReply from './NewReply';

export default function Comment({
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
    addNewReply
}){
    const [newReply, setNewReply] = useState(false);
    const [vote, setVote] = useState(false);
    const [edit, setEdit] = useState(false);
    const [current, setCurrent] = useState(false);
    
    useEffect(() => {
        const curr = username === currentUser.username;
        setCurrent(curr);
    }, [currentUser, username]);

    
}