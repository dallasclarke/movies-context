import React, { useContext } from "react";

import { MovieInputContext } from "../context/MovieContext";
import SearchList from "./SearchList";
import "./Search.css";

const Search = () => {
  const {
    searchValue,
    fetchMovieListAPI,
    isFetching,
  } = useContext(MovieInputContext);

  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={(e) => fetchMovieListAPI(e.target.value)}
        type="text"
      />
      {/* {searchValue !== "" ? <SearchList movieResults={movieResults} /> : ""} */}
      {searchValue !== "" && isFetching && (
        <SearchList />
      )}
    </div>
  );
};

export default Search;
