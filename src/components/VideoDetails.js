import React, {useState} from 'react'

function VideoDetails ({video}) {
    const [upVotes, setUpVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

    function handleUpClick () {
        setUpVotes((prev) => prev + 1)
    }

    function handleDownClick () {
        setDownVotes((prev) => prev + 1)
    }

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpClick}>{upVotes} 👍</button><button onClick={handleDownClick}>{downVotes} 👎</button>
            
        </div>
    )
}

export default VideoDetails