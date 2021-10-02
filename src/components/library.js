import React from "react";
import LibrarySong from "./librarySong";

const Library = ({songs,setSongs,setCurentSong})=>{
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song)=>(
                <LibrarySong song={song} setSongs={setSongs} key={song.song_id} setCurentSong={setCurentSong}/> 
                ))}
            </div>
        </div>
    )
}

export default Library;