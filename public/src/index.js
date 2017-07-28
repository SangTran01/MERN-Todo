import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const uuidv4 = require('uuid/v4');

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todos: []
		};

		this.handleCreateTodo = this.handleCreateTodo.bind(this);
		this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
		this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
	}

	componentDidMount() {
		axios.get('/api/todos')
		.then((res) => {
			const todos = res.data;
			this.setState({todos: todos});
			console.log(this.state.todos);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	handleCreateTodo(todo) {
		const newTodo = {
		//id: uuidv4(),
		text: todo.text || 'Empty Todo',
		status:"incomplete"
		};

		axios.post('/api/todos', newTodo)
		.then((response) => {
			this.setState({todos: this.state.todos.concat(response.data)});
		})
		.catch((error) => {
			console.log('error');
			console.log(error);
		});
	}

	handleDeleteTodo(selectedTodoId) {
		//returns todos that don't match the todoId I selected
		this.setState({
			todos: this.state.todos.filter(todo => todo._id !== selectedTodoId),
		});

		axios.delete('/api/todos', {
			params: { _id: selectedTodoId }
		});
	}

	//updates text and completeed status
	handleUpdateTodo(newTodo) {
		console.log(newTodo);
		var updatedTodos = this.state.todos.map((t) => {
			if (t._id === newTodo._id) {
				return Object.assign({}, t, {
					text:newTodo.text,
					status:newTodo.status
				});
			} else {
				return t;
			}
		});
		console.log(updatedTodos);
		this.setState({todos:updatedTodos});

		axios.put('/api/todos', {
			params: newTodo
		});
	}

	render(){
		return(
			<div>
				<h1>Bootstrap Todo App</h1>
				<TodoForm onCreateTodo={this.handleCreateTodo} />
				<TodoList 
					todos={this.state.todos} 
					onDeleteTodo={this.handleDeleteTodo}
					onUpdateTodo={this.handleUpdateTodo} />
				<div className="too-small">This site does not support mobile, yet!</div>
			</div>	
			);
	}
}



ReactDom.render(<App />, document.querySelector('.container'));