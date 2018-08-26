import { INCREMENT } from './'

export function addTodo(val) {
  return {
    type: INCREMENT,
    val
  }
}