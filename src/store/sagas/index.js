import { all, takeLatest } from 'redux-saga/effects';
import { getMovies, getMovieDetail } from './movies';

export default function* rootSaga(){
  yield all([
    takeLatest('GET_MOVIES_REQUEST', getMovies),
    takeLatest('GET_MOVIE_DETAIL_REQUEST', getMovieDetail),
  ])
}