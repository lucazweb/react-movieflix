import React from "react";

import { MovieRow, Movie, MovieTitle, MovieImage } from "./movies-list.styled";

const MoviesListComponent = (props) => {
  console.log(props.loading);

  const moviesRender = !props.loading ? (
    <MovieRow>
      {props.movies.length > 0 &&
        props.movies.map((movie) => (
          <Movie key={movie.id}>
            <MovieImage
              src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
              title={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </Movie>
        ))}
    </MovieRow>
  ) : (
    <div> Carregando.. </div>
  );

  return moviesRender;
};

export const MovieList = MoviesListComponent;
