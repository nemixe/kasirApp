import { postTransaksi } from '../services/transaksiApi'

export const submitTransaksi = async (transaksi) => {
  const res = await postTransaksi(transaksi)
  if (!res.payload) {
    return res
  }

  return true
}
