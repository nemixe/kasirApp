import { AUTH_TOGGLE, ADD_TRANSAKSI, DELETE_TRANSAKSI, SET_TOKEN, GET_DATA_TRANSAKSI } from '.'
import { get } from '../utils/request'

export const authToggle = value => {
  return {
    type: AUTH_TOGGLE,
    payload: value
  }
}

export const addTransaksi = value => {
  return {
    type: ADD_TRANSAKSI,
    payload: {
      idBuku: value.idBuku,
      jumlah: value.jumlah,
      namaBuku: value.namaBuku,
      totalHarga: value.totalHarga,
    }
  }
}

export const deleteTransaksi = () => {
  return {
    type: DELETE_TRANSAKSI
  }
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

export const getDataTransaksi = () => async (dispatch, getState) => {
  const res = await get('/transaksi', getState().token)
  dispatch({
    type: GET_DATA_TRANSAKSI,
    payload: res.data.payload
  })
}

export const getDataBuku = () => async (dispatch, getState) => {
  const res = await get('/buku', getState().token)
  console.log(res)
  dispatch({
    type: GET_DATA_BUKU,
    payload: res.data
  })
}