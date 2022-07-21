import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API_URL } from "./context";
import { imgUrl } from "./Movie";

const MovieDetail = () => {
  const { id } = useParams();

  const [movieName, setMovieName] = useState("");
  const [isLoading, setisLoading] = useState("true");

  const getMovie = async (url) => {
    setisLoading("true");

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading("false");
        setMovieName(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovie(`${API_URL}&i=${id}`);
    }, 800);

    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading === "true") {
    return <div className="loadingContainer">Loading...</div>;
  }

  return (
    <>
      <div className="movieCardContainer">
        <div className="movieCard">
          <div className="movieImg">
            <img src={movieName.Poster === "N/A" ? imgUrl : movieName.Poster} alt={movieName.Title} />
          </div>
          <div className="movieInfo">
            <h2>{movieName.Title}</h2>
            <p>
              <span>Actors : </span> {movieName.Actors}
            </p>
            <p>
              <span>Director : </span> {movieName.Director}
            </p>
            <p>
              <span>Year : </span> {movieName.Year}
            </p>
            <p>
              <span>Language : </span> {movieName.Language}
            </p>
            <p>
              <span>imdbRating : </span> {movieName.imdbRating}
            </p>
            <p>
              <span>Story : </span> {movieName.Plot}
            </p>
            <p>
              <NavLink to="/"><span className="BackBtn">Back to Search Page</span></NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
