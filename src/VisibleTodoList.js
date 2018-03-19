import React from 'react'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => (
    <ul>
      {todos.map(todo =>
        <div  key={todo.id}>
             <li>
                {todo.text}
                {todo.name}
            </li>
        </div>
      )}
    </ul>
)
const mapStateToProps = state => ({
  todos:state.todos 
})
export default connect(
  mapStateToProps
)(TodoList)