import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


const App = () => {

  const [videos, setVideo] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    handleTermSubmit('Tesla')
  }, [])

  const handleTermSubmit = async (term) => {
    const {data} = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    
      setVideo(data.items)
    setSelectedVideo(data.items[0])
    
  }

  const onVideoSelect = (video) => {
     setSelectedVideo(video)

  }

 

  return (
    <div className="ui container">
      <SearchBar onSubmit={handleTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
      <div className="eleven wide column"><VideoDetail video={selectedVideo}/></div>
      <div className="five wide column"><VideoList onVideoSelect={onVideoSelect}videos={videos}/></div>
      </div>
      </div>
    </div>
  );
}

export default App


