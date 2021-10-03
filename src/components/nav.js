import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus,setLibraryStatus})=>{
    return(
        <nav>
            <div className="logo-title">
                <img src="/geet-logo.png" alt="Geet app logo" height="20px" width="20px" />
                <h1>Geet</h1>
            </div>
            <button onClick={()=>setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}
export default Nav;