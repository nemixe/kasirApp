import { combineReducers } from 'redux'

import AuthToggle from './authToggle'

export default combineReducers({
  isLoggedIn: AuthToggle
})