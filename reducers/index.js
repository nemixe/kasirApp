import { combineReducers } from 'redux'

import authToggle from './authToggle'
import addTransaksi from './addTransaksi'
import setToken from './setToken'
import dataTransaksi from './dataTransaksi'

export default combineReducers({
  isLoggedIn: authToggle,
  transaksi: addTransaksi,
  token: setToken,
  dataTransaksi: dataTransaksi
})