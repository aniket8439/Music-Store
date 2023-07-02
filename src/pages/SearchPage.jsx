import { useEffect, useState } from "react";
import { getSongs } from "../Services/api-client";
import { Search } from "../components/Search"
import {Songs} from "../components/Songs"
import {Player} from "../components/Player";

export const SearchPage =  () => {
    const[allSongs,setAllSongs] = useState([]);
    const[flag,setFlag] = useState(false);
    const[song,setPlayerSong] = useState(null);
    const loadSongs = async () => {
        setAllSongs(await getSongs('Latest Songs'));
    }
    const togglePlayer = (flag,songArg) => {
        setFlag(flag);
        setPlayerSong(songArg);
    }
    useEffect( () => {
        loadSongs();
    },[])
    const getArtistName = async (artistName) => {
        console.log("Rec Artist name: ",artistName);
        setAllSongs(await getSongs(artistName));
    }
    const jsx = <><Search fn = {getArtistName}/>
    <Songs fn = {togglePlayer} allsong = {allSongs}/></>
    return(
        <div className="container-fluid p-5">
            <h1 className='alert alert-info text-center '>Music Store</h1>
            {flag?<Player fn = {togglePlayer} song = {song}/>:jsx}
            
        </div>
    )
}