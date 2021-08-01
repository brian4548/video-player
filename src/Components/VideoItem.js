import React from "react";
import "./VideoItem.css"

class VideoItem extends React.Component {
  render() {
    const vid = this.props.video.snippet;
    
    return (
      <div onClick={() => {this.props.onVideoSelect(this.props.video)}}className="video-item item">
        <img
          className="ui image"
          src={vid.thumbnails.medium.url}
          alt={vid.title}
        />
        <div className="content">
          <div className="header">{vid.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
