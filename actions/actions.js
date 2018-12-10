import { AUTH_TOGGLE } from '.'


export function authToggle(value) {
  return {
    type: AUTH_TOGGLE,
    payload: value
  }
}