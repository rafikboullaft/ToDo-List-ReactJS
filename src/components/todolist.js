import React from "react";

import MyTodo from "./todo";
const TodoList = ({ todos2, setTodos ,filter}) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
					{filter.map( todo => (
						<MyTodo key={todo.id} 
								text={todo.text} 
								todos2={todos2} 
								setTodos={setTodos}
								todo={todo}/>
					))}
			</ul>
		</div>
		);

};
export default TodoList;