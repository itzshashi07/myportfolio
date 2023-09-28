
import React ,{useState} from 'react'
import './Banner.css'
import myImg  from '../../files/myImg.jpg'
function Banner() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    
    // handle mouse movement to update the cursor position
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    const handleClick = () => {
      const email = 'officialshashi2023@gmail.com';
      window.location.href = `mailto:${email}`;
    };

    const [isPlaying, setIsPlaying] = useState(false);

  const audio = new Audio('/path-to-your-song.mp3'); // Replace with your song's file path

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='banner'>
    <div className='banner-container' onMouseMove={(e) => handleMouseMove(e)}>
  
    <div className='banner-left-container '>
        <h2> <span className='text'> H</span>
        
        <span className='text'>i,</span>
          <br/>
          <span className='text'>I'</span>
          <span className='text'>m</span>
          <span className='red-text wordShadow' > S</span>
          <span className='text'>h</span>
          <span className='text'>a</span>
          <span className='text'>s</span>
           <span className='text'>h</span>
           <span className='text'>i</span>

           {/* <span className='text'> K</span>
          <span className='text'>u</span>
           <span className='text'>m</span>
           <span className='text'>a</span>
           <span className='text'>r</span> */}
           <span className='text'>,</span>
         

        
          <br/>
          <span className='text'>F</span>
          <span className='text'>r</span>
          <span className='text'>o</span>
          <span className='text'>n</span>
          <span className='text'>t</span>
          <span className='text'>e</span>
          <span className='text'>n</span>
          <span className='text'>d</span>

          <span className='text'> D</span>
          <span className='text'>e</span>
          <span className='text'>v</span>
          <span className='text'>e</span>
          <span className='text'>l</span>
         <span className='text'>o</span>
          <span className='text'>p</span>
          <span className='text'>e</span>
          <span className='text'>r</span>

        </h2>
        <p>Frontend Developer</p>
        <button class="button-glitch" role="button" onClick={handleClick}>Contact me</button>
    </div>
    <div className='banner-right-container'>
    <div className="circular_image">
         <img className="banner-img"  src={myImg} alt=""/>
    </div>
    
</div>
        </div>
       
    </div>
  )
}

export default Banner