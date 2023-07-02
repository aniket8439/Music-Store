import Marquee from "react-fast-marquee";
export const Player = ({ fn,song }) => {
    return (
        <>
        
            <div>
                <button onClick={() => {
                    fn(false,null)
                }} className="btn btn-success m-3">Back to Home</button>
            </div>
            <div className="container text-center">
            <div>
                <img src={song.artworkUrl100} height={300} width={300} style={{borderRadius:32,textAlign:"center"}} alt="no img found"/>
                </div>
                
                <div className="fs-3 font-monospace mt-5">
                <Marquee>{song.artistName} {song.trackName}</Marquee> 
              
                </div>
                <audio controls 
                src={song.previewUrl}
                ></audio>
            </div>
            
            </>
            
    )
}