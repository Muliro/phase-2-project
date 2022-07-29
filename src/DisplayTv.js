import React, {useEffect} from "react";





function DisplayTv({movies, setMovies}){
    
    useEffect(() => {
        fetch("http://localhost:3000/series")
        .then((r) => r.json())
        .then((data) => setMovies(data));
    },[setMovies])

    const seriesPosters = movies.map((movieData) => {
        return <img key = {movieData.id} src = {movieData.image} alt = {movieData.name}></img>;
        });

    return(
        <>
        {seriesPosters}
        </>
    )

    
}


export default DisplayTv;



