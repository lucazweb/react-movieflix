import React, { Fragment } from "react";
import MainTitle from "../MainTitle";
import { FeaturedMovie } from "../FeaturedMovie";
import { MovieList } from "../MoviesList";
import DataStoreContainer from "../DataStoreContainer";

const Intro = () => (
  <Fragment>
    <MainTitle />
    <FeaturedMovie />
    <DataStoreContainer
      render={({ movies, loading }) => {
        return <MovieList movies={movies} loading={loading} />;
      }}
    />
  </Fragment>
);

export default Intro;
