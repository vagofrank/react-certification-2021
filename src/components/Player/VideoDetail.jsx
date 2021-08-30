import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Choose you favorite video</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
        <div>
            <div>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                <h4 className="textTitle">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;