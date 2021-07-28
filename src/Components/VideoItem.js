import React from "react";

class VideoItem extends React.Component {
  render() {
    const vid = this.props.video.snippet;
    return (
      <div>
          <img src={vid.thumbnails.medium.url} alt="thumbnail" />
        {vid.title}
        
      </div>
    );
  }
}

export default VideoItem;
