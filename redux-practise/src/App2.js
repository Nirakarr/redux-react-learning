import { Form1 } from './redux1/Form1';
import { Todo1 } from './redux1/Todo1';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux1/main';

function App2() {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer1);

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form1/>
      <Todo1/>
      {todos.length > 1&&(
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App2;