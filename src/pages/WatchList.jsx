import { useContext } from "react";
import { DataContext } from "../context/GlobalState";
import MovieCard from "../components/MovieCard";

const WatchList = () => {
  const { watchlist } = useContext(DataContext);
  return (
    <div className="movies-container">
      {watchlist.length === 0 && <h2>No movies in your watchlist</h2>}
      {watchlist.map((movie) => (
        <MovieCard movie={movie} key={movie.id} type="watchlist" />
      ))}
    </div>
  );
};

export default WatchList;
