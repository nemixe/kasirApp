import { post } from '../utils/request'

export const postTransaksi = async (transaksi) => {
  try {
    console.log('3', transaksi)
    const res = await post('/transaksi', transaksi)
    console.log(res)
    return res.data
  } catch (err) {
    return err.response && err.response.status === 400
      ? "Stock buku tidak mencukupi permintaan" : "Unknown error, please try again"
  }
}