import React from "react";
import { Row } from "../Row";
import { requests } from "../../request/request";
import { Banner } from "../Banner";
import { Navbar } from "../Navbar";

export const PrincipalPage = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Crime" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};
