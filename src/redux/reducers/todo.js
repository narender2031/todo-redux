import * as PlayerActionType from '../actiontypes/todo'

const initialState = {
  todos: []
}

const PrevID = 0

export default function todo(state = initialState, action) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const secound = date.getMilliseconds();

  switch(action.type) {
    case PlayerActionType.ADD_TODO: {
      if (action.title){
        const addTodoList = [...state.todos, {
          title: action.title,
          content: action.content,
          id:  PrevID + 1,
          isComplete: action.isComplete || false,
          created: `${day}/${month}/${year}  ${hour}:${minute}:${secound}`,
          updated: `${day}/${month}/${year}  ${hour}:${minute}:${secound}`
        }];
        return {
          ...state,
          todos: addTodoList
        }
      }else{
        return state
      }
    }

    case PlayerActionType.DELETE_TODO: {
      const deleteTodo = [
        ...state.todos.slice(0,action.index),
        ...state.todos.slice(action.index + 1)
      ];
      return {
        ...state,
        todos: deleteTodo
      }
    }



    case PlayerActionType.COMPLETE_TODO: {
      const completeTodo = state.todos.map((todo, index) => {
        if(index === action.index){
          return {
            ...todo,
            isComplete: true
          }
        }
        return todo
      })
      return {
        ...state,
       todos: completeTodo,
       updated: `${day}/${month}/${year}  ${hour}:${minute}:${secound}`
      }
    }

    case PlayerActionType.UNDO_TODO: {
      const undoTodo = state.todos.map((todo, index) => {
        if(index === action.index){
          return {
            ...todo,
            isComplete: false
          }
        }
        return todo
      })
      return {
        ...state,
       todos: undoTodo,
       updated: `${day}/${month}/${year}  ${hour}:${minute}:${secound}`
      }
    }

    default: 
    return state
  }
}