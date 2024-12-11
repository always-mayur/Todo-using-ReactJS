import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
let [todos,setTodos] = useState([{task:"sample task",id: uuidv4(), isDone:false}]);
let [newTodo,setnewTodo] = useState([""]);

let addNewTask = () => {
    setTodos((prevTodo) =>{
    return [...prevTodo,{task:newTodo,id:uuidv4(), isDone:false}]
    });
    setnewTodo("");
}

let updateTodovalue = (event) =>{
setnewTodo(event.target.value);
}

let deleteTodo = (id)=>{
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id!=id))
    console.log(id);
}

let markAllDone =() =>{
    setTodos((prevTodo) =>
    prevTodo.map((todo)=>{
    return {...todo,isDone:true,};
    })
);
};

let markAsDone = (id) =>{
    setTodos((prevTodo) =>
    prevTodo.map((todo)=>{
    if(todo.id == id) {
    return {...todo,isDone:true,};
    } else {
        return todo ;
    } 
})
    );
};


    return (
        <div>
            <input placeholder="add tasks here" value={newTodo} onChange={updateTodovalue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br> 
            <br></br> 

            <hr></hr> 
            <h2>Task To-Do</h2>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</span>
                            &nbsp;  &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button> 
                            <button onClick={() =>markAsDone(todo.id)} >Mark as Done</button>
                            </li>
                            
                    ))
                }
            </ul>
            <br></br> <br></br>
            <button onClick={markAllDone} >Mark All Done</button>
        </div>
    )
}