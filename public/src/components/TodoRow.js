import React from 'react';
import Trash  from 'react-icons/lib/fa/trash';

class TodoRow extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			checkboxState: false
		}

		this.handleTodoDelete = this.handleTodoDelete.bind(this);
		this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
		this.handleToggleEditing = this.handleToggleEditing.bind(this);
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
				status:"complete"
			});
		});
	}

	handleToggleEditing() {
		this.props.onUpdateTodo({
			_id:this.props.id,
			text:this.props.text,
			status:"editing"
		});
	}

	render(){
		return(
			<div>
				<li className="list-group-item row">
					<div className="col-xs-1">
						<input type="checkbox" onChange={this.handleToggleCompleted}/>
					</div>
					<div className="col-xs-10"><a id="click-edit" onClick={this.handleToggleEditing}>{this.props.text}</a></div>
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

export default TodoRow;