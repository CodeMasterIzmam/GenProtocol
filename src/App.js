import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [layout,setLayout]=useState(true);
  const changeHandle = (e) => setInput(e.target.value);
  const submitHandle = (e) => {
    e.preventDefault();
    setInput("");
    setTodos([...todos, { id: Math.random(), title: input }]);
    setLayout(true);
    localStorage.setItem("todos",JSON.stringify(todos))
  };
  const deleteHandle=({id})=>{
    setTodos(todos.filter((todo)=>todo.id !== id));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const editHandle=({id})=>{
    const newTodo=todos.filter((todo)=>todo.id===id)[0];
    setTodos (todos.filter((todo)=>todo.id!==id));
    setInput(newTodo.title);
    alert("Click on edit button to save todo.Else it will be deleted 😊😊");
    setLayout(false);
  }

  useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]
  )

  return (
    <div className="container">
      <div className="app-wrapper">
        <h1>Todos list</h1>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Add Todo..."
            value={input}
            onChange={changeHandle}
            required
            title="Add Todo"
          />
          {layout?
          <button className="btn-primary mx-2" title="Add" type="submit">
            Add
          </button>
          :<button className="btn-primary" title="Edit the choosen Todo😊😊">Edit</button>}
        </form>
        {todos.map((todo, id) => (
          <div key={id} className="d-flex my-4">
            <li>{todo.title}</li>
            <button className="bg-danger mx-4" title="Delete Todo" onClick={()=>deleteHandle(todo,id)}>Delete</button>
          <button className="btn-primary" title="Edit Todo" onClick={()=>editHandle(todo,id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
