
import React, {useState} from 'react' 
import NewTodo from "./NewTodo"
import TodosList from "./TodosList"
import "./Todo.css"

function Todo() {


    const [todos, setTodos] = useState([
        {
            body: "Make a portfolio website",
            completed: true
        },
    {
        body: "Create todo list",
        completed: true
    },
    {
        body: "Get Hired",
        completed: false
    },
    ])

    const createTodo = (todo) => {
    setTodos([...todos, todo]); 
    }

    const updateTodo = (idx) => {
        const copyTodos = [...todos];
        copyTodos[idx].completed = !copyTodos[idx].completed;
        setTodos(copyTodos)
    }

    const deleteTodo = (deletedIdx) => {
    const copyTodos = todos.filter((todo, idx) => {
        if(idx !== deletedIdx){
            return true;
        }
        return false;
    });
        setTodos(copyTodos);
        // setTodos(todos.filter((todo, i) => i !== deletedIdx ? true: false));
    }

    return (
        <body className="body">
    <div className="App">
        
        <div className="title-div">
            <h1 className="title">Todo List</h1>
        </div>

        <div className="todo-input-and-list">
        <div className="todo-input-div">
            <NewTodo createTodo={createTodo}/>
        </div>
        <div className="todo-list-div">
            <TodosList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
        </div>
    </div>
    </body>
    );
}

export default Todo;