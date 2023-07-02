import { useRef } from "react"

export const Search = ({fn}) => {
    const artist = useRef();
    return(
        
        <>
        <label style={{fontSize:"28px"}}>Artist Name :</label>
        <input ref={artist} type="text" className="form-control form-control-lg" placeholder="Search Artist Here" />
        <button onClick={()=>{fn(artist.current.value)}} className="btn btn-success btn-lg mt-3 ">Search</button>
        </>
    )

}