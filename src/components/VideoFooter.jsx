import { MusicNote } from '@mui/icons-material';
import Marquee from 'react-fast-marquee';

import './VideoFooter.css';

// eslint-disable-next-line react/prop-types
const VideoFooter = ({ channel, description, song }) => {
  return (
    <footer className="video-footer">
      <div className="video-footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="video-footer__ticker">
          <MusicNote className="video-footer__icon" />
          <Marquee direction="left" loop={0}>
            <p>{song}</p>
          </Marquee>
        </div>
      </div>
      <img className="video-footer__logo" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
    </footer>
  );
};

export default VideoFooter;
