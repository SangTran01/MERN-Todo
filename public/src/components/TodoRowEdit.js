import React from 'react';
import Trash  from 'react-icons/lib/fa/trash';

class TodoRowEdit extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			formValue: (this.props.text === 'Empty Todo') ? "" : this.props.text
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleInputChange(e){
		e.preventDefault();

		this.setState({formValue: this.refs.text.value})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onUpdateTodo({
			_id:this.props.id,
			text:this.state.formValue || "Empty Todo",
			status:"incomplete"
		});
	}

	render(){
		return(
			<div>
				<li className="list-group-item row">
					<form>
						<div className="col-xs-10">
							<input 
								type="text" 
								ref="text" 
								placeholder="i.e. Become pokemon master" 
								className="form-control"
								value={this.state.formValue}
								onChange={this.handleInputChange} />
						</div>
						<div className="col-xs-2">
							<button 
								type="submit"
								className="btn btn-primary"
								onClick={this.handleSubmit}>
								Update
							</button>
						</div>
					</form>
				</li>
			</div>
		);
	}
}

export default TodoRowEdit;