import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay,faAngleLeft,faAngleRight,faPause} from "@fortawesome/free-solid-svg-icons";

const Player = ({songInfo,setSongInfo,audioRef,currentSong,isPlaying,setIsPlaying,setCurentSong,songs})=>{
    //Event Handler
    const playSongHandler = ()=>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    const getTime = (time)=>{
        return(
            Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
        );
    }
    const dragHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo,currentTime:e.target.value});
    }
    const skipTrackHandler = async (direction) =>{
        let currentIndex = songs.findIndex((song)=>song.id === currentSong.id);
        if(direction==="skip-forward"){
            if(songs.length !== 0){
                await setCurentSong(songs[(currentIndex+1) % songs.length]);
            }
        }
        if(direction==="skip-back"){
            if((currentIndex -1 )% songs.length === -1){
                if(songs.length !== 0){
                    await setCurentSong(songs[songs.length - 1]);
                }
            }else{
                if(songs.length !== 0){
                    await setCurentSong(songs[(currentIndex-1) % songs.length]);
                }
            }
        }
        if(isPlaying){
            audioRef.current.play();
        }
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    )
}
export default Player;