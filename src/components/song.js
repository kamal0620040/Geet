import React from "react";

const Song = ({currentSong})=>{
    return(
        <div className="song-container">
            <img src={currentSong.song_image} />
            <h2>{currentSong.song_name}</h2>
            <h3>{currentSong.song_artist}</h3>
        </div>
    )
}
export default Song;