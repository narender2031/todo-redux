import React, { Component } from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.initialState = {
      title: '',
      content: ''
    }
    this.state = this.initialState
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }


  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state)
    e.currentTarget.reset();
  }

  render(){
    return(
      <form onSubmit={this.addTodo}>
        <div className='row'>
          <h2><b>Create Your Task</b></h2>
          <div className='col-12 mt-4'>
            <input type='text' name='title' placeholder='title' onChange = {this.handleChange} />
          </div>
          <div className='col-12'>
            <input type='textarea' name='content' placeholder='content' onChange = {this.handleChange}/>
          </div>
          <div className='col-12'>
            <input type='Submit' name='Submit' />
          </div>
        </div>
      </form>
    )
  }
}

export default Form