import { call, put, takeEvery } from 'redux-saga/effects'
import { USERS_FETCH_REQUESTED, USERS_FETCH_FAILED, USERS_FETCH_SUCCEEDED } from '../REDUX_CONSTANTS'
import { API_URL } from 'react-native-dotenv'

function* fetchUsers(action){
    try{
        const response = yield fetch(`${API_URL}users`)
        const users = yield response.json()
        yield put({type: USERS_FETCH_SUCCEEDED, users: users})
    }catch(e){
      yield put({ type: USERS_FETCH_FAILED, error: e.message})
    }
}

export default function* mySaga() {
    yield takeEvery(USERS_FETCH_REQUESTED, fetchUsers)
}
