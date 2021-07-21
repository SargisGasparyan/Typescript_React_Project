import  React from 'react'
import { ITodo } from './interfaces'
type Todos={
    todos:ITodo[],
    onToggle(id:number):void
    onRemove(id:number):void
}
export const TodoList:React.FC<Todos>=({todos,onRemove,onToggle})=>{
    const removeHandler=(event:React.MouseEvent,id:number)=>{
        event.preventDefault()
        onRemove(id)
    }
    if(todos.length===0){
        return <p>list is empty</p>
    }
    return(
        <ul>
            {todos.map((todo)=>{
                let classes=["todo"]
                if(todo.completed){
                    classes.push("completed")
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type='checkbox' checked={todo.completed} onChange={onToggle.bind(null,todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={(event)=>removeHandler(event,todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}