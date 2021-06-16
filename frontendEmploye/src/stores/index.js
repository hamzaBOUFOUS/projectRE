import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas'
import { composeWithDevTools  } from 'redux-devtools-extension';

const middlware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools (applyMiddleware(middlware))
);

sagas.forEach(saga => {
  middlware.run(saga);
});

export default store;