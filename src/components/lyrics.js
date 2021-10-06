import React, {useEffect } from "react";

const Lyrics = ({lyricsStatus,currentSong,lyrics,setLyrics})=>{

    const url = "https://saavn.me/lyrics?id=";
    useEffect(()=>{
        console.log(currentSong.song_has_lyrics);
            fetch(url+currentSong.song_id)
              .then(results => results.json())
              .then(data => {
                setLyrics(data);
                console.clear();
        });
    }, [currentSong.song_id,currentSong.song_has_lyrics,setLyrics])
    
    return(
        <div className={`lyrics ${lyricsStatus ? 'active-lyrics' : '' }`}>
            <h2>Lyrics</h2>
            {currentSong.song_has_lyrics ? (lyrics.hasOwnProperty('message') ? <h3>{lyrics.message}</h3> : <h3>{lyrics.lyrics}</h3>) : <h3>Not available.</h3>}
        </div>
    )
}

export default Lyrics;