import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';

import {rootReducers} from "./rootReducers";
import rootSaga from "./saga";
import {IState} from "./ducks/tableItems/contracts/state";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tableItems: IState

}

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)