import React from "react";

const MoveDetails = ({
  Title,
  Year,
  Rated,
  Released,
  Runtime,
  Genre,
  Actors,
  Poster,
  imdb,
}) => {
  return (
    <div>
      <img src={Poster} />
      <div>
        <ul>
          <li>Title: {Title}</li>
          <li>Year: {Year}</li>
          <li>Rated: {Rated}</li>
          <li>Released: {Released}</li>
          <li>Runtime: {Runtime}</li>
          <li>Genre: {Genre}</li>
          <li>Actors: {Actors}</li>
          <li>IMDB: <a href={`https://www.imdb.com/title/${imdb}/`} target="_blank" >Imdb Link</a> </li>
        </ul>
      </div>
    </div>
  );
};

export default MoveDetails;
