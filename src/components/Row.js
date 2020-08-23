import React, { useState, useEffect } from "react";
import axios from "../request/axios";

const base_url = "https://image.tmdb.org/t/p/original/";

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      console.log("dentro");
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="rows__container">
      <div>
        <h2 className="rows__title">{title}</h2>

        <div className="rows__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`rows__poster ${isLargeRow && "rows__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.original_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
