import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import { searchMovies } from "../services/api";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    setError("");

    try {
      const data = await searchMovies(searchTerm);

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("Movie not found!");
      }
    } catch (error) {
      setMovies([]);
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a movie name");
      return;
    }

    fetchMovies(query);
  };

  return (
    <>
      <Navbar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      <div className="hero-banner">
        <h1>Discover Amazing Movies</h1>
        <p>Search and explore thousands of movies.</p>
      </div>

      <div className="movies-section">
        <h2>🎬 Movies</h2>

        {loading && (
          <h2 className="message">
            Loading...
          </h2>
        )}

        {error && (
          <h2 className="error-message">
            {error}
          </h2>
        )}

        {!loading && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;