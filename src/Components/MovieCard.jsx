import React from "react";

const MovieCard = ({ movie }) => {
  const { Title, Poster, Year, Type } = movie;

  return (
    <div className="movie-card">
      <img
        src={Poster !== "N/A" ? Poster : "./no-movie.png"}
        alt={Title}
      />

      <div className="mt-4">
        <h3>{Title}</h3>

        <div className="content">
          <p className="year">{Year}</p>

          <span>•</span>

          <p className="lang">{Type}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;