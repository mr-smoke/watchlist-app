import { useContext } from "react";
import { DataContext } from "../context/GlobalState";

const CardButtons = ({ movie, type }) => {
  const {
    addMovieToWatched,
    addMovieToWatchlist,
    removeMovieFromWatched,
    removeMovieFromWatchlist,
    watched,
    watchlist,
  } = useContext(DataContext);

  const storedWatched = watched.find(
    (watchedMovie) => watchedMovie.id === movie.id
  );

  const storedWatchlist = watchlist.find(
    (watchlistMovie) => watchlistMovie.id === movie.id
  );
  return (
    <>
      {type === "home" && (
        <>
          <button
            onClick={() => addMovieToWatched(movie)}
            disabled={storedWatched}
            className="btn"
          >
            Watched
          </button>
          <button
            onClick={() => addMovieToWatchlist(movie)}
            disabled={storedWatchlist}
            className="btn"
          >
            Watch List
          </button>
        </>
      )}
      {type === "watchlist" && (
        <>
          <button
            onClick={() => removeMovieFromWatchlist(movie.id)}
            className="btn"
          >
            Remove from Watchlist
          </button>
          <button onClick={() => addMovieToWatched(movie)} className="btn">
            Add to Watched
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={() => removeMovieFromWatched(movie.id)}
            className="btn"
          >
            Remove from Watched
          </button>
          <button onClick={() => addMovieToWatchlist(movie)} className="btn">
            Add to Watchlist
          </button>
        </>
      )}
    </>
  );
};

export default CardButtons;
