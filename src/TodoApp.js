import { useState,useContext,useReducer } from 'react'
import TodoObContext from './TodoObContext'
import TodoReducer from './TodoReducer'
function TodoApp() {
    const todoOb=useContext(TodoObContext)
    const [item,setItem]=useState("")
    const [state,dispatch] = useReducer(TodoReducer,todoOb);
    const addTodo=()=>{
        dispatch({type: "add",item:item});
    }
    let deleteTodo=(indexToDelete)=>{
        dispatch({type: "delete",index:indexToDelete});
    }
    const clearHobbies=()=>{
        dispatch({type: "clear"});
     }

    return (
        <div className="TodoApp">
            <div>
                <div className="box">
                    <input type="text" name="item" className="item" placeholder="Enter Todo" onInput={(event)=>{setItem(event.target.value)}}/>
                    <div className="card">
                        <button onClick={addTodo}>Add</button>
                        <button onClick={()=>{clearHobbies()}}>Clear All</button>
                    </div>
                </div>
            </div>
            
            <div className="MyTodos">
            <h1>My Todos</h1>
            {state.map((val, index) => (
              <div className="card">
                <div className="todo"> {val.item}</div>
                <button onClick={()=>{deleteTodo(index)}}>Delete</button>
               </div>
            ))}
             </div>

        </div>
    )

}
export default TodoApp