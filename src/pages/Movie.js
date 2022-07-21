import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

export const imgUrl = "https://via.placeholder.com/600/600";

const Movie = () => {

  const {movieName, isLoading } = useGlobalContext();
  
  if (isLoading === "true") {
    return (
        <div className="loading">Loading....</div>
    )
  }

  return (
    <div className="movieContainer">
      {movieName
        ? movieName.map((curMovie) => {
            const { Title, imdbID, Poster } = curMovie;

            const shortTitle = Title.substring(0, 15);

            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="movieBox">
                  <h3>
                    {shortTitle.length > 13 ? `${shortTitle}...` : shortTitle}
                  </h3>
                  <div className="moviePoster">
                    <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                  </div>
                </div>
              </NavLink>
            );
          })
        : ""}
    </div>
  );
};

export default Movie;
