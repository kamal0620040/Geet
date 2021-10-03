import React from "react";

const LibrarySong = ({song,setCurentSong,audioRef,isPlaying})=>{
    const songSelectorHandler = ()=>{
        setCurentSong(song);

        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio)=>{
                    audioRef.current.play();
                });
            }
        }
        audioRef.current.play();
    }
    return(
        <div onClick={songSelectorHandler} className="library-song">
            <img alt={song.song_name + "Image"} src={song.song_image} />
            <div className="song-description">
                <h3>{song.song_name}</h3>
                <h4>{song.song_artist}</h4>
            </div>
        </div>
    );
}
export default LibrarySong;