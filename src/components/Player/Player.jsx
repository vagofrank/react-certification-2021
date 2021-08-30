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

/*class Player extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="container" style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div>
                    <div>
                        <div>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}*/

export default Player;