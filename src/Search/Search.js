import React from "react";

import SearchList from "./SearchList";
import "./Search.css";

const Search = ({
  searchValue,
  fetchMovieListAPI,
  movieResults,
  isFetching,
}) => {
  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={(e) => fetchMovieListAPI(e.target.value)}
        type="text"
      />
      {/* {searchValue !== "" ? <SearchList movieResults={movieResults} /> : ""} */}
      {searchValue !== "" && isFetching && (
        <SearchList movieResults={movieResults} />
      )}
    </div>
  );
};

export default Search;
