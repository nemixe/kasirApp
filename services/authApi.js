import { post } from '../utils/request'

export const authenticate = async (email, password) => {
  try {
    const res = await post('/user/signin', {
      email,
      password
    })

    return res.data
  } catch (err) {
    return err.response && err.response.status === 404
      ? "Wrong email/password" : "Unknown error, please try again"
  }
}