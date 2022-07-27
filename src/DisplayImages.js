import React, {useEffect, useState} from "react";












function DisplayImages(){
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch("http://localhost:3000/Movies")
        .then((r) => r.json())
        .then((data) => setMovies(data));
    }, [])

    const moviePosters = movies.map((movieData) => {
       return <img key = {movieData.id} src = {movieData.image} alt = {movieData.name}></img>})

       console.log(moviePosters);
      
    return(
        <>
          {moviePosters}
        </>
    )

}


export default DisplayImages;