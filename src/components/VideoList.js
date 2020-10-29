import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
  const RenderList = props.videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed devided list">{RenderList}</div>;
};

export default VideoList;
