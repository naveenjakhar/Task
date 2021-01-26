import React from 'react'
import TodoItems from './TodoItems'
import {useSelector} from 'react-redux'
const TodoList = () => {
  let todos = useSelector(state => state)
    return (
        <div className="mt-5">
            <h3>List</h3>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Phone no </th>
      <th scope="col">Action </th>
    </tr>
  </thead>
  <tbody>
            {todos.map(todo=>{
              return <TodoItems key={todo.id} todo={todo}/>
            })}
            </tbody>
</table>
        </div>
    )
}

export default TodoList
