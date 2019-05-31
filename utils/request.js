import axiosHelper from './axiosHelper'

export const post = async (endpoint, data) => {
  return await axiosHelper.post(endpoint, data, {
    headers: { "Content-Type": "application/json" }
  })
}

export const get = async (endpoint, jwt) => {
  const headers = jwt
    ? {
      headers: { Authorization: `Bearer ${jwt}` }
    }
    : null
  return await axiosHelper.get(endpoint, headers)
}