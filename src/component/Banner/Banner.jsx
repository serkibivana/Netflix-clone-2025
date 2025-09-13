import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";

const Banner = () => {
  //intialize the state
  const [movie, setMovie] = useState({});

  //useEffect to show the effect when it renders the browser
  useEffect(() => {
    const fetchData = async () => {
      try {
        //fetch by combining axios baseUrl and request
        const response = await axios.get(requests.fetchNetflixOriginals);
        console.log(response);
        const results = response.data.results;
        //we want the single image data
        const randomIndex = Math.floor(Math.random() * results.length);
        setMovie(results[randomIndex]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // to cut the length of the word
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button1 banner_common">Play</button>
          <button className="banner__button banner_common">My List</button>
        </div>

        <p className="banner__description">{truncate(movie?.overview, 150)}</p>

        {/* alternative way of the trancate or cut the paragraph */}

        {/* <p className="banner__description">
          {movie?.overview?.slice(0, 150) +
            (movie?.overview?.length > 150 ? "..." : "")}
        </p> */}
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
