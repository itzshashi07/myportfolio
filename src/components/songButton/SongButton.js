import React, { useState, useRef, useEffect } from 'react';
import './SongButton.css'
import song from "../../files/u-said-it-v13-1167.mp3"

const SongButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
   
    const audioRef = useRef(new Audio(song));
  
    const togglePlay = () => {
      const audio = audioRef.current;
  
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0; // Reset playback position
      } else {
        audio.play();
      }
  
      setIsPlaying(!isPlaying);
    };
  return (
    <div className='songButton'>
      
 
    <div className={`song-button ${isPlaying ? 'isPlaying' : ''}`} onClick={togglePlay}>
      <div className="music-line"></div>
      <div className="music-line2"></div>
      <div className="music-line"></div>
      <div className="music-line2"></div>
      <div className="music-line2"></div>
      <div className="music-line"></div>
      <div className="music-line2"></div>
    </div>     

    </div>
  );
};

export default SongButton;
