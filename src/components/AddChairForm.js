import React, { Component } from 'react'

export default class AddChairForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: ''
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleTitleChange(event) {
		this.setState({ title: event.target.value });
	}

	handleDescriptionChange(event) {
		this.setState({ description: event.target.value });
	}

	handleSave(event) {
		event.preventDefault();
		this.props.onAddChair({ 
			title: this.state.title, 
			description: this.state.description 
		});
		this.setState({ title: '', description: '' });
	}

	render() {
		return (
			<div className="row">
				<div className="col-6">
					<form className="border m-3 p-3">
						<label className="form-label">Title:</label>
						<input type="text" className="form-control" 
							value={this.state.title} onChange={this.handleTitleChange} />
						<label className="form-label mt-2">Description:</label>
						<input type="text" className="form-control" 
							value={this.state.description} onChange={this.handleDescriptionChange} />
						<button className="btn btn-success mt-3" onClick={this.handleSave}>Add Chair</button>
					</form>
				</div>
			</div>
		);
	}
}