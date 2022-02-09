import { useEffect, useState} from 'react';
import NewReply from './newReply';

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

    return (
        <>
        {
            <div className='comment'>
                <div className='scoreColumn'>
                    {
                        current
                        ?
                        <>
                        <img className='flex-item upvote disabled-upvote' src = './images/icon-plus.svg' alt="upvote" />
                        <span className='flex-item'>{score}</span>
                        <img className='flex-item downvote disabled-upvote' src='./images/icon-minus.svg' alt="downvote" />
                        </>
                        :
                        <>
                        <img className="flex-item upvote" src='./images/icon-plus.svg' alt="upvote" onClick={() => {
                        if (!vote) {
                            updateScore(id, 'upvote');
                            setVote(true);}
                        }}/>
                        <span className="flex-item">{score}</span>
                        <img className="flex-item downvote" src='./images/icon-minus.svg' alt="downvote" onClick={() => {
                            if (!vote) {
                                updateScore(id, 'downvote');
                                setVote(true);}
                            }}
                        />
                        </>
                    }
                </div>
                <div className='contentColumn'>
                    
                </div>
            </div>
        }
        </>
    )



}
