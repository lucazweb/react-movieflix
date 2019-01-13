import { call, put } from 'redux-saga/effects';
import api, { apiKey } from '../../services/movidbApi';
import { getMoviesSuccess, getMoviesFailure, getMovieDetailSuccess } from '../actions/movies';

export function* getMovies (action){
  try{
    const { data } = yield call(api.get, `/movie/popular?api_key=${apiKey}`)
    console.log(data);
    yield put(getMoviesSuccess(data));
  } catch(err){
    yield put(getMoviesFailure(err));
  }
}

export function* getMovieDetail (action){
  console.log(action);
    try{
      const { data } = yield call(api.get, `/movie/${action.payload}?api_key=${apiKey}`)
      console.log('SAGA MOVIE DETAIL', data);
      yield put(getMovieDetailSuccess(data));
    }catch(err){
      console.log('ERRO NO SAGA :', err);
      yield getMoviesFailure(err);
    }
}