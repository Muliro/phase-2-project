import React, {useState} from "react";
import DisplayImages from "./DisplayImages";
import DisplayAnime from "./DisplayAnime";
import DisplayAnimation from "./DisplayAnimation";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";

import DisplayTv from "./DisplayTv";



function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="images">
      <NavBar />
      <Switch>
      <Route exact path = "/movies"><DisplayImages movies = {movies} class = "movies" setMovies = {setMovies}/></Route>
      <Route exact path = "/anime"><DisplayAnime movies = {movies} class = "anime" setMovies = {setMovies}/></Route>
      <Route exact path = "/animation"><DisplayAnimation movies = {movies} class = "animation" setMovies = {setMovies}  /></Route>
      <Route exact path = "/"><DisplayTv movies = {movies} class = "series" setMovies = {setMovies} /></Route>
      </Switch>
    </div>
  );
}

export default App;

