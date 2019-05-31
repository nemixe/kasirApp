import { SET_TOKEN } from '../actions'

export default (state = null, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload
    default:
      return state
  }
}