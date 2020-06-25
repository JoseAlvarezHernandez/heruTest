import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import userReducer from './reducers/userReducer'
import mySaga from './Saga/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    userReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default store