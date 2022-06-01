import React from 'react'
import './Todos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 

function Todos(props) {
  return (
    <div className="todos">
        {props.toDos.map((ele)=>{
           return (
                <div key={ele.id} className={`todo ${ele.active ? "" : "todo-inactive"}`}>
                    <div className="left">
                        {ele.completed && <FontAwesomeIcon icon={solid('check-double')} />}
                        <p>{ele.text}</p>
                    </div>
                    {ele.active && !ele.completed && (props.type !== 'incompleted' ) && <div className="right">
                        <FontAwesomeIcon onClick={()=> props.completeTodo(ele.id)} className="green" icon={solid('check-circle')} />
                        <FontAwesomeIcon onClick={()=> props.deleteTodo(ele.id)} className='red' icon={solid('trash')}  />
                    </div>}
                </div>
            )
        })}
        {props.toDos.length < 1 && 
            <div className='no-data'>
                <p>No Todos Present </p> 
            </div>
        }
            
    </div> 
  )
}

export default Todos