
import React, {useEffect} from "react";





function DisplayAnimation({movies, setMovies}){
    
    useEffect(() => {
        fetch("http://localhost:3000/animation")
        .then((r) => r.json())
        .then((data) => setMovies(data));
    },[setMovies])

    const animationPosters = movies.map((movieData) => {
        return <img key = {movieData.id} src = {movieData.image} alt = {movieData.name}></img>;
              });
      
    return (<>{animationPosters}</>);
        
    
    

}


export default DisplayAnimation;