import { useContext } from "react";
import { DataContext } from "../context/GlobalState";
import MovieCard from "../components/MovieCard";

const Watched = () => {
  const { watched } = useContext(DataContext);

  return (
    <div className="movies-container">
      {watched.length === 0 && <h2>No movies in your watched list</h2>}
      {watched.map((movie) => (
        <MovieCard movie={movie} key={movie.id} type="watched" />
      ))}
    </div>
  );
};

export default Watched;
