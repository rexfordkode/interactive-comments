import './newComment.css'
let reply;

const newReply = (
    {
        setNewReply,
        currentUser,
        addNewReply,
        parentId
    }
) =>{
    return (
        <div className='newComment'>
            <div className='avatarColumn'>
                <img className='avatarReply' src={currentUser.image.png}  alt='curent user'/>
            </div>
            <div className='inputComment'>
                <textarea 
                className='replyInput'
                placeholder='Add a comment..'
                onChange={(e) => {reply = e.target.value}}
                >
                </textarea>
            </div>

        <div className='sendColumn'>
            <button className='sendButton' onClick={(e) =>{
                addNewReply(parentId, reply)
                setNewReply(false)
            }} >
                REPLY
            </button>

            </div>
        </div>
    )

}
export default newReply;