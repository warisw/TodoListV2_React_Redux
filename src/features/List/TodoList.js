import React from 'react'
import { useDispatch } from "react-redux";
import {  completeItem, deleteItem} from "./FormSlice";
import "./TodoList.css"
function TodoList({todo:{id,text,complete}}) {
    const dispatch = useDispatch();
    return (
        <div className={complete ? 'todoComp completed' : 'todoComp'}>
            <h1 key={id}>{text}</h1>
            <button onClick={() => dispatch(deleteItem(id))}>Delete</button>
            <button onClick={() => dispatch(completeItem(id))}>Done</button>
        </div>
    )
}

export default TodoList