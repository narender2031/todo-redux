import * as TodoActionType from '../actiontypes/todo'

export const addTodo = (title) => {
  return {
    type: TodoActionType.ADD_TODO,
    title: title.title,
    content: title.content,
    isComplete: false
  }
}

export const deleteTodo = (index) => {
  return {
    type: TodoActionType.DELETE_TODO,
    index
  }
}



export const completeTodo = (index) => {
  return {
    type: TodoActionType.COMPLETE_TODO,
    index
  }
}

export const undoTodo = (index) => {
  return {
    type: TodoActionType.UNDO_TODO,
    index
  }
}