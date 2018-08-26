import { INCREMENT } from '../actions'

export default (state = [], action) => {
  switch (action) {
    case INCREMENT:
      return action.val++
      break;

    default:
      return state
      break;
  }
}