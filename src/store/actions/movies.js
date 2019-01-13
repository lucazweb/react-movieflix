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