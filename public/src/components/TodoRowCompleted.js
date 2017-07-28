import React from 'react';
import Trash  from 'react-icons/lib/fa/trash';

class TodoRowCompleted extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			checkboxState: true
		}

		this.handleTodoDelete = this.handleTodoDelete.bind(this);
		this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
	}

	handleTodoDelete(){
		this.props.onDeleteTodo(this.props.id)
	}

	handleToggleCompleted(event){
		this.setState({checkboxState: !this.state.checkboxState}, () => {
			console.log(this.state.checkboxState);
			this.props.onUpdateTodo({
				_id:this.props.id,
				text:this.props.text,
				status:"incomplete"
			});
		});
	}

	render(){
		return(
			<div>
				<li className="list-group-item completed row">
					<div className="col-xs-1">
						<input type="checkbox" checked onChange={this.handleToggleCompleted}/>
					</div>
					<div id="todo-text" className="col-xs-10">{this.props.text}</div>
					<div className="col-xs-1">
						<button 
							type="button" 
							className="close" 
							aria-label="Close"
							onClick={this.handleTodoDelete}>
						<span aria-hidden="true"><Trash/></span>
						</button>
					</div>
				</li>
			</div>
		);
	}
}

export default TodoRowCompleted;