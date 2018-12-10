import { AUTH_TOGGLE } from '../actions'
export default (state = false, action) => {
  switch (action.type) {
    case AUTH_TOGGLE:
      return action.payload
    default:
      return state
  }
}