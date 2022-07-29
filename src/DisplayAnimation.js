
import React, {useEffect} from "react";





import LikeButton from "./LikeButton";





function DisplayAnimation({movies, setMovies}){
    
    useEffect(() => {
        fetch("http://localhost:3000/animation")
        .then((r) => r.json())
        .then((data) => setMovies(data));
    },[setMovies])


    const animationPosters = movies.map((movieData) => {
        return <><h1>{movieData.name}</h1><img key = {movieData.id} src = {movieData.image} alt = {movieData.name}></img><LikeButton/></>; });
    
      
    return (
    <>
    {animationPosters}
    </>
);
        
    
    

}


export default DisplayAnimation;