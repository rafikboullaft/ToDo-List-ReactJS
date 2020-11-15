import React from "react";

const MyTodo = ({ text, todo,todos2 ,setTodos }) => {
	const deleteHandler = () => {
		setTodos(todos2.filter( dell => dell.id !== todo.id ));

	}
	const completedHandler = () => {
		setTodos(todos2.map( item => {
			if(item.id === todo.id){
				return{
					...item, completed :!item.completed
				} 
			}
			return item;

			}))
	}
	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ''}`}> {text} </li>
			<button onClick={completedHandler} className="complete-btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={deleteHandler} className="trash-btn">
				<i className="fas fa-trash"></i>
			</button>
		</div>

		);
};

export default MyTodo;