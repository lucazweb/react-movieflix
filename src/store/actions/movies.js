export const getMoviesRequest = data => ({
    type: 'GET_MOVIES_REQUEST',
    payload: data,
  }
);

export const getMoviesSuccess = data => ({
    type: 'GET_MOVIES_SUCCESS',
    payload: data,
  }
);

export const getMoviesFailure = error => ({
    type: 'GET_MOVIES_FAILURE',
    payload: error,
  }
);

export const getMovieDetailRequest = id => ({
  type: 'GET_MOVIE_DETAIL_REQUEST',
  payload: id,
});

export const getMovieDetailSuccess = data => ({
  type: 'GET_MOVIE_DETAIL_SUCCESS',
  payload: data,
}
);