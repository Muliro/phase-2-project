import React, {useEffect} from "react";
import LikeButton from "./LikeButton";












function DisplayImages({movies, setMovies}){
    
    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then((r) => r.json())
        .then((data) => setMovies(data));
    },[setMovies])

    const moviePosters = movies.map((movieData) => {
        return <><h1>{movieData.name}</h1><img key = {movieData.id} src = {movieData.image} alt = {movieData.name}></img><LikeButton/></>;
              });
      
    return (<>{moviePosters}</>);
        
    
    

}


export default DisplayImages;