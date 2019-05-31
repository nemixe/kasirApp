import cookie from 'js-cookie'

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1 / 24,
      path: '/'
    })
  }
}

export const removeCookie = key => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1 / 24,
      path: '/'
    })
  }
}

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req)
}

export const getCookieFromBrowser = (key) => {
  return cookie.get(key)
}

export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith(`${key}=`))

  if (!rawCookie) {
    return undefined
  }
  return rawCookie.split("=")[1]
}