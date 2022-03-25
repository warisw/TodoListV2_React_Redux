import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectTodos } from "./FormSlice";
import "./form.css"
import TodoList from "./TodoList";
function Form() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const Todos = useSelector(selectTodos);


    return (
        <div className="form">
            <h1>Add To do</h1>
            <input value={input} onChange={(e) => { setInput(e.target.value) }}></input>
            <button onClick={() => input !== '' && dispatch(addItem({ text: input, id: Math.floor(Math.random() * 10000), complete: false }))}>Add</button>
            {Todos.map((todo) =>
                <TodoList todo={todo} />
            )}
        </div>
    );
}

export default Form;
