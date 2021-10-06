import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus,setLibraryStatus,lyricsStatus,setLyricsStatus})=>{
    
    return(
        <nav>
            <div className="logo-title">
                <img src="/geet-logo.png" alt="Geet app logo" height="20px" width="20px" />
                <h1>Geet</h1>
            </div>
            <div className="buttonsDiv">
                <button style={{marginRight:'10px'}} onClick={()=>{
                    setLyricsStatus(!lyricsStatus);
                    if(libraryStatus){
                        setLibraryStatus(!libraryStatus);
                    }
                    }}>
                    Lyrics
                </button>
                <button onClick={()=>{
                    setLibraryStatus(!libraryStatus);
                    if(lyricsStatus){
                        setLyricsStatus(!lyricsStatus);
                    }
                    }}>
                    Library
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </div>
        </nav>
    )
}
export default Nav;