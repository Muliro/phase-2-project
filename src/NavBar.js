import React from "react";
import { NavLink } from "react-router-dom";






const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 50px 50px",
  background: "gray",
  textDecoration: "none",
  color: "white",
};






function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          onClick={() => {window.location.href="/"}}
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "black",
          }}
        >
          Series.
        </NavLink>
        <NavLink
          to="/anime"
          onClick={() => {window.location.href="/anime"}}
          exact
          style={linkStyles}
          activeStyle={{
            background: "black",
          }}
        >
           Anime.
        </NavLink>
        <NavLink
          to="/movies"
          onClick={() => {window.location.href="/movies"}}
          exact
          style={linkStyles}
          activeStyle={{
            background: "black",
          }}
        >
          Movies.
        </NavLink>
        <NavLink
          to="/animation"
          onClick={() => {window.location.href="/animation"}}
          exact
          style={linkStyles}
          activeStyle={{
            background: "black",
          }}
        >
          Animation.
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;