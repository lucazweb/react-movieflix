import { all, takeLatest } from 'redux-saga/effects';
import getMovies from './movies';

export default function* rootSaga(){
  yield all([
    takeLatest('GET_MOVIES_REQUEST', getMovies),
  ])
}