import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useContext, useState } from "react";

import { MovieInputContext } from "./context/MovieContext";

import Search from "./Search/Search";
import Movie from "./Movie/Movie";
import MoveDetails from "./Movie/MovieDetails";
import "./App.css";

function AppNav() {
  const [searchValue, setSearchValue] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function fetchMovieListAPI(inputValue) {
    setSearchValue(inputValue);

    const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_OMDB_API;

    try {
      const response = await fetch(
        `http://omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${inputValue}`
      );

      const data = await response.json();

      if (!data.Error) {
        setIsFetching(true);
        setMovieResults(data.Search);
      }

      setMovieResults(data.Search || []);
    } catch (e) {
      console.log(e);
    }
  }

  const movieContext = {
    searchValue,
    fetchMovieListAPI,
    movieResults,
    isFetching,
  };

  return (
    <MovieInputContext.Provider value={movieContext}>
      <div className="App">
        <Search />
      </div>
    </MovieInputContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppNav} />
        <Route exact path="/:movieTitle" component={Movie} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
