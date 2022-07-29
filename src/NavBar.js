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
          to="/series"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "black",
          }}
        >
          Series
        </NavLink>
        <NavLink
          to="/anime"
          exact
          style={linkStyles}
          activeStyle={{
            background: "black",
          }}
        >
          Japanese Anime.
        </NavLink>
        <NavLink
          to="/movies"
          exact
          style={linkStyles}
          activeStyle={{
            background: "black",
          }}
        >
          Movies
        </NavLink>
        <NavLink
          to="/animation"
          exact
          style={linkStyles}
          activeStyle={{
            background: "black",
          }}
        >
          Animation Movies
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;