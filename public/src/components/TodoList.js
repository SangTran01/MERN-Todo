import React from 'react';
import TodoRow from './TodoRow';
import TodoRowCompleted from './TodoRowCompleted';
import TodoRowEdit from './TodoRowEdit';

class TodoList extends React.Component {
	render(){
		const todoRows = this.props.todos.map((todo) => {
			if (todo.status === "complete") {
				return <TodoRowCompleted 
					key={todo._id}
					id={todo._id} 
					text={todo.text}
					onDeleteTodo={this.props.onDeleteTodo}
					onUpdateTodo={this.props.onUpdateTodo} />
			} else if (todo.status === "incomplete") {
				return <TodoRow
					key={todo._id}
					id={todo._id} 
					text={todo.text}
					onDeleteTodo={this.props.onDeleteTodo}
					onUpdateTodo={this.props.onUpdateTodo} />
			} else if (todo.status === "editing") {
				return <TodoRowEdit 
					key={todo._id}
					id={todo._id} 
					text={todo.text}
					onDeleteTodo={this.props.onDeleteTodo}
					onUpdateTodo={this.props.onUpdateTodo} />
			}
		});
		return(
			<div>
				<ul className="list-group">
					{todoRows}
				</ul>
			</div>
		);
	}
}

export default TodoList;