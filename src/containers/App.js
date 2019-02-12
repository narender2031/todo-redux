import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as TodoActionCreators from '../redux/actions/todo'
import Form from '../components/Form'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
class App extends Component {

  render() {
    const {dispatch, todos } = this.props
    const addTodo = bindActionCreators(TodoActionCreators.addTodo, dispatch);
    const deleteTodo = bindActionCreators(TodoActionCreators.deleteTodo, dispatch);
    const completeTodo = bindActionCreators(TodoActionCreators.completeTodo, dispatch);
    const unCompleteTodo = bindActionCreators(TodoActionCreators.undoTodo, dispatch);
    
    return (
      <div className="App">
        <Header />
        <Form addTodo={addTodo}/>
        <TodoList 
          todos={todos}
          deleteTodo= {deleteTodo}
          completeTodo= {completeTodo}
          unCompleteTodo= {unCompleteTodo}
        />
      </div>
    );
  }
}


const mapStateToProps = state => (
  {
    todos: state.todos
  }
)
export default connect(mapStateToProps)(App)
