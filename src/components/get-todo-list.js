import {filterList} from "../redux/action.js"

export const getTodoList = (todos, filter) => {
    switch (filter) {
      case filterList.SHOW_ALL:
        return todos
      case filterList.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed)
      case filterList.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
}