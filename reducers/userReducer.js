import { USERS_FETCH_SUCCEEDED, USERS_FETCH_FAILED } from './../REDUX_CONSTANTS'

const userReducer = (state = { users : []}, action) => {
    switch(action.type) {
        case USERS_FETCH_SUCCEEDED:
            const {users} = action
            return { ...state, users }
        
        case USERS_FETCH_FAILED:
            return { ...state, error: action.payload }
        
        default:
            return state
        
    }
}

export default userReducer