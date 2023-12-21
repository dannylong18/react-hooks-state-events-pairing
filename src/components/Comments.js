import React, {useState} from "react";

function Comments ({video}) {
    const [showCommentState, setShowCommentState] = useState(true)

    function handleComment () {
        setShowCommentState (!showCommentState)
    }

    const commentLength = <h2>{video.comments.length} Comments</h2>
    const showComment = video.comments.map((item) => {
            return (
            <div  key={item.id}>
                <h3>{item.user}</h3>
                <p>{item.comment}</p>
            </div>
            )
        }
    )

    return (
        <div>
            <button onClick={handleComment}>{showCommentState? "Hide Comments" : "Show Comments"}</button>
            <hr />
            {showCommentState? commentLength : null}
            {showCommentState? showComment : null}
        </div>
    )
}

export default Comments