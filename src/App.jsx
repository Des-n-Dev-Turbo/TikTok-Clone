import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import Video from './components/Video';
import db from './firebase';

import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const videosCollection = collection(db, 'videos');
    const videoSnapshot = await getDocs(videosCollection);
    const videoData = videoSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVideos(videoData);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (!videos.length) {
    return (
      <div className="app">
        <h2 style={{ color: 'white' }}>Loading...</h2>;
      </div>
    );
  }

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}

export default App;
