import React, { useEffect, useState } from "react";
import axios from "../../request/axios";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
  const { movie } = useParams();
  const [mov, setMov] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/tv/${movie}?api_key=743e46f72c9e2390d309f98587536e3f&language=en-US`
      );
      setMov(request.data);
      return request;
    };
    fetchData();
  }, [movie]);

  const { genres = [] } = mov;
  console.log(genres);

  if (genres) {
    genres.map((genre) => <div>{genre.name}</div>);
  }
  return (
    <div>
      <h2>
        {genres
          ? genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
          : ""}
        {mov.name}
        {console.log(mov.name)}
      </h2>

      {/*<img
        src={`https://image.tmdb.org/t/p/original/${mov.backdrop_path}`}
        alt={mov.name}
     />*/}
    </div>
  );
};
