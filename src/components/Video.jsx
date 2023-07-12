import { useEffect, useRef, useState } from 'react';

import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

import './Video.css';
import useIsInViewport from '../hooks/useInViewport';

// eslint-disable-next-line react/prop-types
const Video = ({ id, url, channel, description, song, likes, messages, shares }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const inViewport = useIsInViewport(videoRef);

  useEffect(() => {
    if (videoRef.current.id === id && !inViewport) {
      setPlaying(inViewport);
      videoRef.current.pause();
    }
  }, [id, inViewport]);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        src={url}
        id={id}
        onClick={onVideoPress}
        autoPlay={false}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
