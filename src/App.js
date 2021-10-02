import React,{useState} from "react";

// Import Styles
import "./styles/app.scss"

//Adding Components
import Player from './components/player';
import Song from './components/song';
import Library from './components/library'

//Import Utils
import savan from "./util";

function App() {
  //State
  const [songs,setSongs] = useState(savan());
  const [currentSong,setCurentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
