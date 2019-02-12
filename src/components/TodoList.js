import React from 'react'
import { Link } from 'react-router'

// import EditForm from './EditForm'
const TodoList = ({todos, deleteTodo, completeTodo, unCompleteTodo}) => {

  if(todos.length > 0) {
    return(
      <div className='talsk-list'>
        <ul>
          {todos.map((todo, index) => {
            if(todo.isComplete){
              return(
                <li key={index}>
                  <span>Title: </span> <strike>{todo.title}</strike>
                  <p>content: <strike> {todo.content} </strike></p>
                  <p>Time: <span>{todo.updated}</span></p>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                  <button onClick={() => unCompleteTodo(index)} >Undo</button>
                </li>
              )
            }
            return (
              <li key={index}>
                <span>Title: </span> {todo.title}
                <p>content:  {todo.content}</p>
                <p>Time: <span>{todo.updated}</span></p>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button onClick={() => completeTodo(index)} >Complete</button>
                
              </li>
            )
          })}
        </ul>
      </div>
    )
  }else{
    return (
      <p>No task fot today</p>
    )
  }
}

export default TodoList