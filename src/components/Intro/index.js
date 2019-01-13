import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as movieActions from '../../store/actions/movies';
import { Link } from 'react-router-dom';
import { MainTitle, Appbox, Movie } from './style';

const Intro = ({movies, getMovieDetailRequest}) => (
  <Fragment>
    <MainTitle> React Movieflix</MainTitle>
    <Appbox>
        {
         movies!== undefined && movies.map((movie) => (
            <Movie key={movie.id}>
              <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}` } alt={movie.title} title={movie.title} />
              <h2> <Link to={`/detail/${movie.id}`} onClick={() => getMovieDetailRequest(movie.id)}> {movie.title} </Link> </h2>
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

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Intro);