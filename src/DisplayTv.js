import React, {useEffect} from "react";






import LikeButton from "./LikeButton";





function DisplayTv({movies, setMovies}){
    
    useEffect(() => {
        fetch("http://localhost:3000/series")
        .then((r) => r.json())
        .then((data) => setMovies(data));
    },[setMovies])

    const seriesPosters = movies.map((movieData) => {
        return <><h1>{movieData.name}</h1><img key = {movieData.id} src = {movieData.image} alt = {movieData.name}></img><LikeButton/></>;
        });

    return(
        <>
        {seriesPosters}
        </>
    )

    
}


export default DisplayTv;



