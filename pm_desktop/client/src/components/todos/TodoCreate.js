import React from 'react';
import { changeValueTodoField } from '../../actions';
import { connect } from 'react-redux';

class TodoCreate extends React.Component {
	componentDidMount() {}

	renderTextInput = ({ name, placeholder, label, required }) => {
		const fieldClassName = `field ${required ? 'required' : ''}`;
		return (
			<div className={fieldClassName}>
				<label>{label}</label>
				<input
					type="text"
					name={name}
					placeholder={placeholder}
					onChange={(e) => this.props.changeValueTodoField(name, e.target.value)}
				/>
			</div>
		);
	};

	render() {
		return (
			<div>
				<div className="ui form">
					{this.renderTextInput({
						name: 'title',
						placeholder: 'Enter a title',
						label: 'Title',
						required: true
					})}
					<div className="field">
						<label>Description</label>
						<input type="text" name="description" placeholder="Enter a description" />
					</div>
					<div className="field">
						<div className="ui checkbox">
							<label>Done</label>
							<input type="checkbox" tabIndex="0" className="hidden" name="done" />
						</div>
					</div>
					<button className="ui button" type="submit">
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default TodoCreate;
