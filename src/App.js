import React,{useState,useRef} from "react";

// Import Styles
import "./styles/app.scss"

//Adding Components
import Player from './components/player';
import Song from './components/song';
import Library from './components/library'

//Import Utils
import savan from "./util";

function App() {
  // ref
  const audioRef = useRef(null);
  //State
  const [songs,setSongs] = useState(savan());
  const [currentSong,setCurentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime:0,
    duration:0
  });

  const timeUpdate = (e)=>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo,currentTime:current,duration:duration});
  }
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library setSongs={setSongs} songs={songs} setCurentSong={setCurentSong} audioRef={audioRef} isPlaying={isPlaying} />
      <audio onLoadedMetadata={timeUpdate} onTimeUpdate={timeUpdate} ref={audioRef} src={currentSong.download_links[2]}></audio>
    </div>
  );
}

export default App;
