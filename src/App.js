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
      <Route  path = "/movies"><DisplayImages movies = {movies} setMovies = {setMovies}/></Route>
      <Route  path = "/series"><DisplayTv movies = {movies} setMovies = {setMovies} /></Route>
      <Route  path = "/anime"><DisplayAnime movies = {movies} setMovies = {setMovies}/></Route>
      <Route  path = "/animation"><DisplayAnimation movies = {movies} setMovies = {setMovies}  /></Route>
      </Switch>
    </div>
  );
}

export default App;

