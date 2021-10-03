import React, { useState } from "react";
import LibrarySong from "./librarySong";

const Library = ({songs,setSongs,setCurentSong,audioRef,isPlaying,libraryStatus})=>{
    
    const [searchSong,setSearchSong] = useState("");
    const onSearchChange = (e) => {
        setSearchSong(e.target.value);
    };
    

    const handleSubmit =(e) => {
        e.preventDefault();
        onSearch(searchSong);
        // console.log(e);
        e.currentTarget.reset();
    };

    const onSearch = (query) => {
        const url = `https://saavn.me/search?song=${query}`;

        fetch(url)
          .then(results => results.json())
          .then(data => {
            // console.log(data);
            setSongs(data);
          });
      };

    return(
        <div className={`library ${libraryStatus ? 'active-library' : '' }`}>
            <h2>Library</h2>
            
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-input" type="search"
                    onChange={onSearchChange}
                    name="search"
                    placeholder="Search Song" />
                <button className="search-button" type="submit" id="submit">Go!</button>
            </form>

            <div className="library-songs">
                {songs.map((song)=>(
                <LibrarySong song={song} setSongs={setSongs} key={song.song_id} audioRef={audioRef} isPlaying={isPlaying} setCurentSong={setCurentSong}/> 
                ))}
            </div>
        </div>
    )
}

export default Library;