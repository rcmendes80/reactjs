import React from 'react';
import { createTempTodo, changeValueTodoField, saveTodo } from '../../actions';
import { connect } from 'react-redux';

import InputTextForm from '../basics/InputTextForm';

class TodoCreate extends React.Component {
	componentDidMount() {
		this.props.createTempTodo();
	}

	render() {
		return (
			<div>
				<div className="ui form">
					<InputTextForm
						name="title"
						placeholder="Enter a title"
						label="Title"
						required={true}
						value={this.props.todo.title}
						onChange={(e) => this.props.changeValueTodoField('title', e.target.value)}
					/>
					<InputTextForm
						name="description"
						placeholder="Enter a Description"
						label="Description"
						required={false}
						value={this.props.todo.description}
						onChange={(e) => this.props.changeValueTodoField('description', e.target.value)}
					/>
					<div className="field">
						<div className="ui checkbox">
							<label>Done</label>
							<input type="checkbox" tabIndex="0" className="hidden" name="done" />
						</div>
					</div>
					<button className="ui button" onClick={this.props.saveTodo}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ todo: state.todos.tempTodo });

export default connect(mapStateToProps, { createTempTodo, changeValueTodoField, saveTodo })(TodoCreate);
