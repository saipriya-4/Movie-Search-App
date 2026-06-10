const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
console.log(import.meta.env.VITE_OMDB_API_KEY);

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  );

  return response.json();
};

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  );

  return response.json();
};