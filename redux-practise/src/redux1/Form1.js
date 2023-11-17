import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './main';
export const Form1 = () => {

 const dispatch = useDispatch();

 const [todoValue, setTodoValue]=useState('');

 const handleSubmit=(e)=>{
     e.preventDefault();
     let date = new Date();
     let time = date.getTime();
     let todoObj={
         id: time,
         todo: todoValue,
         completed: false
     }
     setTodoValue('');
     dispatch(addTodo(todoObj))
 }

  return (
    <form className='form-group custom-form' onClick={handleSubmit}>
      <label>Add your todo-items</label>
      <div className='input-and-btn'>
        <input type="text" className='form-control' required
          value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
        <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
      </div>
    </form> 
  )
}