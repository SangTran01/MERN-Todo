import React from 'react';


//FORMS must use state
class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		//might add to state if we're editing todos
		this.state = {}
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onCreateTodo({
			text:this.refs.text.value
		});
		//clear input
		this.refs.text.value = "";
	}

	render(){
		return(
			<div className="add-todo-container row">
					<form>
						<div className="col-xs-10">
							<input 
								type="text" 
								ref="text" 
								placeholder="i.e. Become pokemon master" 
								className="form-control" />
						</div>
						<div className="col-xs-2">
							<button 
								type="submit"
								className="btn btn-primary"
								onClick={this.handleSubmit}>
								Add
							</button>
						</div>
					</form>
			</div>
		);
	}

	
}

export default TodoForm;