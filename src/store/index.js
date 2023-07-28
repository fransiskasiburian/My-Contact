import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import ducks from './ducks';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

let middlewares = [];
middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(...middlewares)
const enhancer = compose(middleware);
const store = createStore(ducks, initialState, enhancer);

sagaMiddleware.run(sagas);

export default store;
