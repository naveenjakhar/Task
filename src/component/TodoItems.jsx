import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteTodo } from '../redux/action';
const TodoItems = ({todo}) => {
  let dispatch = useDispatch();
  
    return (
        
            
            <tr>
      <th scope="row">{todo.id.length >2?todo.id[2]:todo.id}</th>
      <td><b>{todo.name}</b></td>
      <td>{todo.role}</td>
      <td>{todo.no}</td>
      
      <td><button onClick={()=>dispatch(deleteTodo(todo.id))} className="btn btn-danger">Delete</button></td>
    </tr>
        
    )
}

export default TodoItems
