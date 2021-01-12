import React, { useState } from 'react'

const NewTodo = ({createTodo}) => {

    const [todoText, setTodoText] = useState("");

const submitTodo = (e) => {

    if(todoText.length < 2 ){
        e.preventDefault();
        return
    }else {
        e.preventDefault();

    createTodo({
        "body": todoText,
        "completed": false
    });

    setTodoText("");
    }
}
const todoError = (e) => {
    
}

    return (
        <div>
            <form onSubmit={submitTodo}>
                    <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)}/>
                <input type="submit" value="Create a new todo!"/>
            </form>
        </div>
    )
}

export default NewTodo;