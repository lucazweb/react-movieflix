import React, { useEffect, Component } from 'react';
import store from './store';
import { Provider, connect } from 'react-redux';
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

// const mapStateToProps = (state) => {
//   return {
//     movies: state.data,
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);