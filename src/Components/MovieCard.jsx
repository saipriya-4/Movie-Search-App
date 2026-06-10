import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="card-link">
      <div className="movie-card">
        <img
  src={
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://placehold.co/300x450?text=No+Poster"
  }
  alt={movie.Title}
  onError={(e) => {
    e.target.src =
      "https://placehold.co/300x450?text=No+Poster";
  }}
/>

        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;