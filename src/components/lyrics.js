import React, {useEffect } from "react";

const Lyrics = ({lyricsStatus,currentSong,lyrics,setLyrics})=>{

    useEffect(()=>{
        // console.log(currentSong.song_has_lyrics);
            fetch(`https://saavn.dev/api/songs/${currentSong?.id}/lyrics`)
              .then(results => results.json())
              .then(data => {
                setLyrics(data);
                console.clear();
        });
    }, [currentSong?.id,currentSong?.hasLyrics,setLyrics])
    
    return(
        <div className={`lyrics ${lyricsStatus ? 'active-lyrics' : '' }`}>
            <h2>Lyrics</h2>
            {currentSong?.hasLyrics ? (lyrics.hasOwnProperty('data') ? <LyricsRenderer lyrics={lyrics?.data?.lyrics} /> : <h3>Not available.</h3>) : <h3>Not available.</h3>}
        </div>
    )
}

const LyricsRenderer = ({ lyrics }) => {
    // Split the lyrics by <br> tag to get individual lines
    const lines = lyrics.split('<br>');
  
    return (
      <h3>
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </h3>
    );
};

export default Lyrics;