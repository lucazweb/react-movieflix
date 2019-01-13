import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MainTitle, Appbox, Movie } from './style';

const Intro = ({movies}) => (
  <Fragment>
    <MainTitle> React Movieflix</MainTitle>
    <Appbox>
        {
         movies!== undefined && movies.map((movie) => (
            <Movie key={movie.id}>
              <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}` } alt={movie.title} title={movie.title} />
              <h2> <Link to='/detail' > {movie.title} </Link> </h2>
            </Movie>
          ))
        }
    </Appbox>
  </Fragment>
);

const mapStateToProps = (state) => {
  return {
    movies: state.movies.data,
  }
};

export default connect(mapStateToProps)(Intro);