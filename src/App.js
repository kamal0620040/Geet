import React,{useState,useRef,useEffect} from "react";

// Import Styles
import "./styles/app.scss"

//Adding Components
import Player from './components/player';
import Song from './components/song';
import Library from './components/library'
import Lyrics from "./components/lyrics";
import Nav from "./components/nav";

//Import Utils
import savan from "./util";

function App() {
  // ref
  const audioRef = useRef(null);
  //State
  // const [songs,setSongs] = useState(savan());
  const [songs,setSongs] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  // const [currentSong,setCurentSong] = useState(songs[0]);
  const [currentSong,setCurentSong] = useState();
  const [isPlaying,setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime:0,
    duration:0
  });
  const [libraryStatus,setLibraryStatus] = useState(false);
  const [lyrics,setLyrics] = useState({});
  const [lyricsStatus,setLyricsStatus] = useState(false);

  const timeUpdate = (e)=>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo,currentTime:current,duration:duration});
  }
  const songEndHandler = async ()=>{
    let currentIndex = songs.findIndex((song)=>song.id === currentSong.id);
    if(songs.length !== 0){
      await setCurentSong(songs[(currentIndex+1) % songs.length]);
    }
    if(isPlaying){
      audioRef.current.play();
    }
  }

  useEffect(() => {
    const fetchSongs = async () => {
      const fetchedSongs = await savan();
      console.log(fetchedSongs);
      setSongs(fetchedSongs);
      setCurentSong(fetchedSongs[0]);
      setIsLoading(false);
    };

    // Call the async function
    fetchSongs();
  }, []);

  if(isLoading) return (
    <div style={{display: "flex",flexDirection:"column", height: "100vh", width: "100%", alignItems: "center", justifyContent:"center"}}>
      <div>Loading...</div>
      <div>
        <a href="https://kamalneupane.vercel.app">Kamal Neupane</a>
      </div>
    </div>
  )

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""} ${lyricsStatus ? "lyrics-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} lyricsStatus={lyricsStatus} setLyricsStatus={setLyricsStatus} setLyrics={setLyrics} currentSong={currentSong} />
      <Song currentSong={currentSong} />
      <Player songInfo={songInfo} songs={songs} setCurentSong={setCurentSong} setSongInfo={setSongInfo} audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library setSongs={setSongs} songs={songs} setCurentSong={setCurentSong} audioRef={audioRef} isPlaying={isPlaying} libraryStatus={libraryStatus}/>
      <Lyrics lyricsStatus={lyricsStatus} currentSong={currentSong} lyrics={lyrics} setLyrics={setLyrics} />
      <audio onEnded={songEndHandler} onLoadedMetadata={timeUpdate} onTimeUpdate={timeUpdate} ref={audioRef} src={currentSong?.downloadUrl[currentSong?.downloadUrl.length - 1]?.url}></audio>
    </div>
  );
}

export default App;
