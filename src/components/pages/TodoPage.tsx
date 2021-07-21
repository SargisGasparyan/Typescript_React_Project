import React,{useState,useEffect} from 'react'
import {TodoForm} from '../TodoForm'
import { TodoList } from '../TodoList';
import { ITodo } from '../interfaces';

declare let confirm:(question:string)=>boolean

export const TodoPage:React.FC=()=>{
    const[todos,setTodos]=useState<ITodo[]>([])

  useEffect(()=>{
    const saved=JSON.parse(localStorage.getItem("todos")||"[]") as ITodo[]
    setTodos(saved)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const onAdd=(title:string)=>{
    const newElem={
      title:title,
      id:Date.now(),
      completed:false
    }
    setTodos(prev=>[newElem,...prev]);
  }

  
  const toggleHandler=(id:number)=>{
    setTodos(
      todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
        console.log("thisssss--->",todo.completed)
      }
      return todo
    }))
  }

  const removeHandler=(id:number)=>{
    let should = confirm("duq hamozvac eq vor uzum eq jnjel")
    if(should){
      setTodos(prev=>prev.filter((todo)=>todo.id!==id));
    }
  }
    return(
        <>
        <TodoForm onAdd={onAdd}/>
         <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </>
    )
}