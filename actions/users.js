import { USERS_FETCH_SUCCEEDED } from '../REDUX_CONSTANTS'

export function fetchUsers(users){
    return { type: USERS_FETCH_SUCCEEDED, payload: users}
}