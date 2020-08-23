import React, { useState, useEffect } from "react";
import axios from "../request/axios";
import { requests } from "../request/request";
import { Link } from "react-router-dom";

export const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      console.log("banner");
      return request;
    }
    fetchData();
  }, []);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__content">
          <div className="banner__mini-container">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <h2 className="banner__description">{movie.overview}</h2>
            <div className="banner__buttons">
              <button className="banner__button-play">
                <i className="fas fa-play banner__icono"></i>Play
              </button>
              <Link to={`./netflix/${movie.id}`}>
                <button className="banner__button-list">
                  <i className="fas fa-info-circle banner__icono" />
                  Info
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
