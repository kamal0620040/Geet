import React,{useState,useRef} from "react";

// Import Styles
import "./styles/app.scss"

//Adding Components
import Player from './components/player';
import Song from './components/song';
import Library from './components/library'
import Nav from "./components/nav";

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
  const [libraryStatus,setLibraryStatus] = useState(false);

  const timeUpdate = (e)=>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo,currentTime:current,duration:duration});
  }
  const songEndHandler = async ()=>{
    let currentIndex = songs.findIndex((song)=>song.song_id === currentSong.song_id);
    if(songs.length !== 0){
      await setCurentSong(songs[(currentIndex+1) % songs.length]);
    }
    if(isPlaying){
      audioRef.current.play();
    }
  }
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player songInfo={songInfo} songs={songs} setCurentSong={setCurentSong} setSongInfo={setSongInfo} audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library setSongs={setSongs} songs={songs} setCurentSong={setCurentSong} audioRef={audioRef} isPlaying={isPlaying} libraryStatus={libraryStatus}/>
      <audio onEnded={songEndHandler} onLoadedMetadata={timeUpdate} onTimeUpdate={timeUpdate} ref={audioRef} src={currentSong.download_links[2]}></audio>
    </div>
  );
}

export default App;
