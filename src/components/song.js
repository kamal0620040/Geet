import React from "react";

const Song = ({currentSong})=>{
    return(
        <div className="song-container">
            <img alt={currentSong?.name + "Image"} src={currentSong?.image[currentSong?.image.length - 1]?.url} />
            <h2>{currentSong?.name}</h2>
            <h3>{currentSong?.artists?.all.slice(0, 4).map(artist => artist.name).join(', ')}</h3>
        </div>
    )
}
export default Song;