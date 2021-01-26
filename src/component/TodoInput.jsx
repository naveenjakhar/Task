import {useDispatch} from 'react-redux'
import 'react-phone-number-input/style.css'

import React, { useState } from 'react'
import { addTodo } from '../redux/action'
import { v1 as uuid } from 'uuid'

const TodoInput = () => {
 
  let [name,setName] = useState();
  let [role,setRole] = useState();
  let [no,setNo] = useState();
  let dispatch = useDispatch();
    return (
       
          
           <div className="container mt-5">
            <form>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Name</label>
      <input placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputState">Role</label>
      <select  value={role} onChange={(e)=>setRole(e.target.value)} id="inputState" class="form-control">
        <option selected>Please select Role</option>
        <option>Admin</option>
        <option>User</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Phone No</label>
      <input placeholder="Enter your Phone no" value={no} onChange={(e)=>setNo(e.target.value)} type="text" class="form-control" id="inputZip" />
    </div>
  </div>
 
  <button onClick={()=>{
    dispatch(  addTodo(
    {id:uuid(),
    name: name,
    role: role,
    no : no }
    
  ))
  setName('');
  }} type="button" class="btn btn-primary">Add</button>
 
</form></div>
         
       
    )
}

export default TodoInput
