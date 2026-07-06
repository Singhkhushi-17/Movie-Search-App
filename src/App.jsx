import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
const API_BASE_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async (query) => {
    if (!query.trim()) {
      setMovieList([]);
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await fetch(
        `${API_BASE_URL}?apikey=${API_KEY}&s=${query}`
      );

      const data = await response.json();

      console.log(data);

      if (data.Response === "False") {
        setMovieList([]);
        setErrorMessage(data.Error);
        return;
      }

      setMovieList(data.Search);
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />

          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>

          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </header>

        <section className="all-movies">
          <h2>Movies</h2>

          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : movieList.length > 0 ? (
              <ul>
                  {movieList.map((movie) => (
                   <MovieCard
                 key={movie.imdbID}
                movie={movie}
              />
            ))}
           </ul>
          ) : (
            <p className="text-white">
              Search for a movie to see results.
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;