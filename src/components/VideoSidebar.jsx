import { useState } from 'react';

import { Chat, Favorite, FavoriteBorder, Share } from '@mui/icons-material';

import './VideoSidebar.css';

// eslint-disable-next-line react/prop-types
const VideoSidebar = ({ likes, messages, shares }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <aside className="video-sidebar">
      <div className="video-sidebar__button" onClick={handleLike}>
        {liked ? <Favorite fontSize="large" /> : <FavoriteBorder fontSize="large" />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="video-sidebar__button">
        <Chat fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="video-sidebar__button">
        <Share fontSize="large" />
        <p>{shares}</p>
      </div>
    </aside>
  );
};

export default VideoSidebar;
