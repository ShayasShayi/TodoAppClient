import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Todos from './Todos/Todos';



function App() {
  const [todo,setToDo] = useState('');
  const [toDos,setToDos]=useState([]);

  const addTodo = ()=>{
    setToDos([...toDos,{id:Date.now(),text:todo,completed:false,active:true}]);
    setToDo('');
  }

  const deleteTodo = (id)=>{
    const modifiedTodo = toDos.map((ele)=>{
      if(ele.id === id){
        ele.active =false
      }
      return ele;
    }) 
    setToDos(modifiedTodo);
  }

  const completeTodo = (id)=>{
    const modifiedTodo = toDos.map((ele)=>{
      if(ele.id === id){
        ele.completed = true
      }
      return ele;
    }) 
    setToDos(modifiedTodo);
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hi Shayas</h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="Add item..." />
        <FontAwesomeIcon onClick={()=>{addTodo()}}  className="highlight" icon={solid('plus')} />
      </div>

      <div className='list-container'>
        <div className='todo-content'>
            <p>All Todos</p>
            <Todos type={'all'} toDos={toDos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
          </div>

          <div className='todo-content'>
            <p>Completed ToDos</p>
            <Todos type={'completed'} toDos={toDos.filter(ele=>ele.completed)}/>
          </div>

          <div className='todo-content'>
            <p>InComplete ToDos</p>
            <Todos type={'incompleted'} toDos={toDos.filter(ele=>!ele.completed && ele.active)}/>
          </div>

          <div className='todo-content'>
            <p>Removed ToDos</p>
            <Todos type={'deleted'} toDos={toDos.filter(ele=>!ele.active)}/>
          </div>

      </div>

    </div>
  );
}

export default App;