export const Player = ({ fn,song }) => {
    return (
        <>
            <div>
                <button onClick={() => {
                    fn(false,null)
                }} className="btn btn-success m-3">Back to Home</button>
            </div>
            <div>
                {song.artistName} {song.trackName}
            </div>
            <div>
                <audio controls 
                src={song.previewUrl}
                ></audio>
            </div></>
    )
}