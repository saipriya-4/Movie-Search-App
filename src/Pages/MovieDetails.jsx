import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const data = await getMovieDetails(id);
    setMovie(data);
  };

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-container">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="details-card">
        <img
          src={movie.Poster}
          alt={movie.Title}
        />

        <div className="details-content">
          <h1>{movie.Title}</h1>

          <p>
            ⭐ {movie.imdbRating}
          </p>

          <p>
            📅 {movie.Year}
          </p>

          <p>
            🎭 {movie.Genre}
          </p>

          <p>
            ⏱ {movie.Runtime}
          </p>

          <p>
            {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;