import React, {useEffect} from "react";












function DisplayImages({movies, setMovies}){
    
    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then((r) => r.json())
        .then((data) => setMovies(data));
    },[setMovies])

    const moviePosters = movies.map((movieData) => {
        return <img key = {movieData.id} src = {movieData.image} alt = {movieData.name}></img>;
              });
      
    return (<>{moviePosters}</>);
        
    
    

}


export default DisplayImages;