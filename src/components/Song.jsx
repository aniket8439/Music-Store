export const Song = ({fn,song}) => {
    const showPlayer = () => {
        fn(true,song);

    }
    return(
        <>
        <div className="row mt-3 p-4 border border-2" style={{height:200,borderRadius:32,borderColor:"#FFF",backgroundColor:"#242B2E"}}>
            <div className="col-4 text-center"><img src={song.artworkUrl100} height={150} width={150} style={{borderRadius:8}} alt="no img found"/></div>
            <div className="col-4 text-lg-center fs-3 font-monospace mt-5">{song.artistName} {song.trackName}</div>
            <div className="col-4 align-content-lg-end"><button className="btn btn-primary " style={{marginLeft:10,marginTop:50}} onClick={showPlayer}>Play Song</button></div>
            </div></>

    );
}