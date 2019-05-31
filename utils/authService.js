import { authenticate, newUser } from '../services/authApi'
import redirect from './redirect'
import { setCookie, removeCookie, getCookie } from './session'

export const signIn = async (email, password) => {
  const res = await authenticate(email, password)

  if (!res.tokenID) {
    return res
  }

  setCookie('jwt', res.tokenID)
  redirect('/index')
  return null
}

export const signUp = async (email, password) => {
  const res = await newUser(email, password)

  if (!res.data) {
    return res
  }

  setCookie('success', `email ${email} was created.`)
  redirect('/login')
  return null
}

export const signOut = (ctx = {}) => {
  removeCookie('jwt')
  redirect('/login', ctx)
}
export const getJwt = ctx => {
  return getCookie('jwt', ctx.req)
}

export const isAuthenticated = ctx => !!getJwt(ctx)

export const redirectIfAuthenticated = ctx => {
  if (isAuthenticated(ctx)) {
    redirect('/index', ctx)
    return true
  }
  return false
}

export const redirectIfnotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    redirect('/login', ctx)
    return true
  }
  return false
}