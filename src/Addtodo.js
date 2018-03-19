import React from 'react'
import { connect } from 'react-redux'
// import { addTodo } from './Actions'
 

let nextTodoId=0
const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    name:'herris'
})


const AddTodo = ({ dispatch }) => {
  let input, input1
  return (
    <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          if (!input1.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          dispatch(addTodo(input1.value))
          input.value = ''
          input1.value = ''
        }}>
        <input ref={node => input = node} />
        <input ref={node => input1 = node} />
        
        <button type="submit">
          Add Todo
        </button>


      </form>
    </div>
  )
}
 
export default connect()(AddTodo)