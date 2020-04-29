import { combineReducers } from 'redux'
import Auth from './auth'
import User from './user'
import Collection from './collection'
import Alert from './alert'

export default combineReducers({
    Auth, User, Collection, Alert
    
})
