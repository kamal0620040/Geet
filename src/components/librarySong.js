import React from "react";

const LibrarySong = ({song,setCurentSong,audioRef,isPlaying})=>{
    const songSelectorHandler = async ()=>{
        await setCurentSong(song);
        if(isPlaying){
            audioRef.current.play();
        }
    };
    return(
        <div onClick={songSelectorHandler} className="library-song">
            <img alt={song.name + "Image"} src={song?.image[0]?.url} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song?.artists?.all.slice(0, 2).map(artist => artist.name).join(', ')}</h4>
            </div>
        </div>
    );
}
export default LibrarySong;