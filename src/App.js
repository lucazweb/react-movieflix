import React from 'react';
import store from './store';
import { Provider  } from 'react-redux';
import Wrapper from './Wrapper';

const App = () => (
  <Provider store={store}>
    <Wrapper />
  </Provider>
);

export default App;
