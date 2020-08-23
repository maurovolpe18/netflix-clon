const API_KEY = "743e46f72c9e2390d309f98587536e3f";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-MX`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-MX`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=80`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=10749`,
};
