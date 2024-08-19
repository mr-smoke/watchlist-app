import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_MOVIE_API_KEY,
      },
    };

    fetch("https://api.themoviedb.org/3/discover/movie", options)
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  };

  const searchMovie = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_MOVIE_API_KEY,
      },
    };

    if (!search) {
      fetchMovies();
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${search}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));

    setSearch("");
  };

  return (
    <section>
      <div className="container">
        <div className="container-inner">
          <h1>Welcome</h1>
          <h2>Discover the best movies</h2>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => searchMovie()}>Search</button>
          </div>
        </div>
        <div className="movies-list">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="home" />
            ))
          ) : (
            <p>No movies found...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
