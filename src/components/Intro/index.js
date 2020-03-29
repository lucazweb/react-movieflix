import React, { Fragment } from 'react';
import * as movieActions from '../../store/actions/movies';
import { bindActionCreators } from 'redux';

import MainTitle from '../MainTitle';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FeaturedMovie } from '../FeaturedMovie';
import { MovieImage, Movie, MovieTitle, MovieRow } from './style';

const Intro = ({movies, getMovieDetailRequest}) => (
  <Fragment>
    <MainTitle />
    <FeaturedMovie />
    <MovieRow>
      {
        movies && movies.map(movie => (
          <Link to={`/detail/${movie.id}`} onClick={() => getMovieDetailRequest(movie.id)}>
            <div>
              <Movie key={movie.id}>
                <MovieImage 
                  src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
                  alt={movie.title} 
                  title={movie.title} 
                />
                <MovieTitle>{movie.title}</MovieTitle>
              </Movie>
            </div>  
          </Link>
        ))
      }
    </MovieRow>
  </Fragment>
);

const mapStateToProps = ({ movies }) => ({ movies: movies.data });

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
