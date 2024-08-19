import CardButtons from "./CardButtons";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <br />
      <p>Rating: {String(movie.vote_average).slice(0, 3)}</p>
      <CardButtons type={type} movie={movie} />
    </div>
  );
};

export default MovieCard;
