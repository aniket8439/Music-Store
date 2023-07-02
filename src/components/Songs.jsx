import {Song} from './Song';
export const Songs = ({fn,allsong}) => {
    return(
        <>
        {allsong.map((currentSong,index)=><Song fn = {fn} key = {index} song = {currentSong}/>)};
        </>
    )
}