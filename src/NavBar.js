import React from "react";
import { NavLink } from "react-router-dom";






const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
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
            background: "darkblue",
          }}
        >
          Series
        </NavLink>
        <NavLink
          to="/anime"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Japanese Anime.
        </NavLink>
        <NavLink
          to="/movies"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Movies
        </NavLink>
        <NavLink
          to="/animation"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Animation Movies
        </NavLink>
        <NavLink
          to="/documentaries"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Documentaries
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;