export const Song = ({fn,song}) => {
    const showPlayer = () => {
        fn(true,song);

    }
    return(
        <div className="row mt-3">
            <div className="col-4"><img src={song.artworkUrl100} alt="no img found"/></div>
            <div className="col-4 text-lg-center">{song.artistName} {song.trackName}</div>
            <div className="col-4 align-content-lg-end"><button className="btn btn-primary align-content-lg-end" onClick={showPlayer}>Play Song</button></div>
            </div>

    );
}