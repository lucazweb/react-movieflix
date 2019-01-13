import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
middlewares.push(sagaMiddleware);


const store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);
export default store;

// OLD STRUCTURE
// import { createStore } from 'redux';
// import reducers from './reducers';


// const store = createStore(
//   reducers,
// );

// export default store;