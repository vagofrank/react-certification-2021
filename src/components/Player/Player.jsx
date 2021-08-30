import React, {useState} from "react";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

function Player(props){

    const [selectedVideo, setselectedVideo] = useState(null);

    const handleVideoSelect = (video) => {
        setselectedVideo(video)
    }

    return (
        <div className="container playerViewer">
            <div className="container">
                <VideoDetail video={selectedVideo}/>
            </div>
            <div className="container playerList">
                <VideoList handleVideoSelect={handleVideoSelect} videos={props.videos}/>
            </div>
        </div>
    )

}

export default Player;