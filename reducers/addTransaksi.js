import { ADD_TRANSAKSI, DELETE_TRANSAKSI } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSAKSI:

      return [...state, action.payload]
    case DELETE_TRANSAKSI:
      return []
    default:
      return state
  }
}