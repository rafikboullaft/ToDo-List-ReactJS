import React, {useState, useEffect} from 'react';
import './App.css';
//import components

import Form from "./components/form";
import TodoList from "./components/todolist";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filter, setFilter] = useState([]);
  //USE effect
  //run once
  useEffect( ()=> {
  	getLocalTodos();
  },[]);

//run evry time todos or status changed
  useEffect( () => {
  	filterHandler();
  	saveLocalTodos();

  },[todos,status]);

  const filterHandler = () => {
  	 switch(status){
  		case "complet":
  			setFilter(todos.filter( todo => todo.completed === true));
  			break;
  		case "uncompleted":
  			setFilter(todos.filter( todo => todo.completed === false));
  			break;
  		default:
  			setFilter(todos);
  			break;
  }	
  }
  //save to local
  const saveLocalTodos = () => {
  	localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
  	if (localStorage.getItem("todos") === null){
  		localStorage.setItem("todos", JSON.stringify([]));
  	}else {
  		let myLocal = JSON.parse(localStorage.getItem("todos"));
  		setTodos(myLocal);
  		console.log(myLocal);
  	}
  };

  return (
    <div className="App">
        <header>
            <h1>Rafik Todo List</h1>
        </header>
        <Form 
        	
        	todos={todos} 
        	setTodos={setTodos} 
        	inputText={inputText} 
        	setInputText={setInputText}
        	setStatus={setStatus}
         />
        <TodoList todos2={todos} setTodos={setTodos} filter={filter} />
        
    </div>
  );
}

export default App;
