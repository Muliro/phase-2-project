import React, {useEffect} from "react";





function DisplayAnime({movies, setMovies}){
    
    useEffect(() => {
        fetch("http://localhost:3000/anime")
        .then((r) => r.json())
        .then((data) => setMovies(data));
    },[setMovies])

    const animePosters = movies.map((movieData) => {
        return <img key = {movieData.id} src = {movieData.image} alt = {movieData.name}></img>;
        });

    return(
        <>
        {animePosters}
        </>
    )

    
}


export default DisplayAnime;