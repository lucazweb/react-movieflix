import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as moviesActions from '../../store/actions/movies';
import BackButton from '../BackButton';
import { Appbox, MovieImageBox, MovieDetailBox} from './style';

const MovieDetail = ({selectedMovie}) => (
  <Fragment>
    <Link to='/'>
      <BackButton />
    </Link>
    <Appbox>
      {
        selectedMovie ? (
          <Fragment>
            <MovieImageBox>
              <img src={`http://image.tmdb.org/t/p/w342/${selectedMovie.poster_path}`} title={selectedMovie.title} alt={selectedMovie.title} />
            </MovieImageBox>

            <MovieDetailBox>
              <h2> {selectedMovie.title}</h2>
              <p> {selectedMovie.overview}</p>
            </MovieDetailBox>
          </Fragment>
        ) : <Redirect to='/' />
      }
    </Appbox>
  </Fragment>
);

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.movies.selectedMovie,
    loading: state.movies.loading,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(moviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);