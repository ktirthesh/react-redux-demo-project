import { combineReducers } from 'redux'
import cakeReducer from './Cakes/cakeReducer'
import icecreamReducer from './Icecreams/icecreamReducer'
import userReducer from './User/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user : userReducer
})

export default rootReducer