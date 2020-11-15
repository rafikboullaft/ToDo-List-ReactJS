import React from "react";


const Form = (props) => {
	// events
	const inputHandler = (e) => {
		console.log(e.target.value);
		props.setInputText(e.target.value);

	};
	const submitHandler = (e) =>{
		e.preventDefault();
		props.setTodos([
			...props.todos,{text: props.inputText, completed: false, id: Math.random()*100},

			]);
		props.setInputText('');
	};
	const statusHandler = (e) => {
		props.setStatus(e.target.value);
	}
	return(
		<form>
			<input 
				value={props.inputText}
				onChange={inputHandler}
				type="text" 
				className="todo-input"
			/>
			<button onClick={submitHandler} className="todo-button" type='submit'>
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onClick={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="complet">complet</option>
					<option value="uncompleted">uncompleted</option>
				</select>
			</div>
		</form>

		);
};
export default Form;