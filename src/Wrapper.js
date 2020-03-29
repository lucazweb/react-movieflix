import React, { useEffect } from 'react';
import store from './store';
import { Provider} from 'react-redux';
import { getMoviesRequest } from './store/actions/movies';
import Routes from './Routes';

const Wrapper = () => {
  
  useEffect(() => {
    store.dispatch(getMoviesRequest());
  });

  return (
    <Provider store={store}>
      <Routes />
    </Provider>     
  );  
}

export default Wrapper;
