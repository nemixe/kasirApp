import { GET_DATA_TRANSAKSI } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_TRANSAKSI:
      return action.payload
    default:
      return state
  }
}