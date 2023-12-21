import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments.js";

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      
      <VideoDetails video={video}/>
      <div className="space-between-components" />
      <Comments video={video}/>
    </div>
  );
}

export default App;
