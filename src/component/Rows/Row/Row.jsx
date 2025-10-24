import { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import "./row.css";
//a package to search movie trailer from youtube by using the url and specfic id
//import movieTrailer from "movie-trailer";
//to embed youtube video in our react app
//import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  // console.log(title);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        // console.log("API Response:", request.data);
        setMovies(request.data.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMovies([]);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        const url = await movieTrailer(movie?.name || movie?.title || "");
        // console.log(url);
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get("v");
          setTrailerUrl(videoId || "");
        } else {
          console.log("Error: No trailer found");
        }
      } catch (error) {
        console.log("Trailer not found:", error);
        setTrailerUrl("");
      }
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title}
            />
          ))
        ) : (
          <div>No movies found</div>
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
