import { call, put } from 'redux-saga/effects';
import api, { apiKey } from '../../services/movidbApi';
import { getMoviesSuccess, getMoviesFailure } from '../actions/movies';

export default function* getMovies (action){
  try{
    const { data } = yield call(api.get, `/movie/popular?api_key=${apiKey}`)
    console.log(data);
    yield put(getMoviesSuccess(data));
  } catch(err){
    yield put(getMoviesFailure(err));
  }
}