import React from 'react';
import { createTempTodo, changeValueTodoField, saveTodo } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

class TodoCreate extends React.Component {
	componentDidMount() {
		this.props.createTempTodo();
	}

	onSave = (e) => {
		const todo = this.props.todo;
		const errors = this.validate(todo);
		console.log('#: TodoCreate -> onSave -> errors', errors, Object.values(errors).length);
		if (Object.values(errors).length > 1) {
			e.preventDefault();
		} else {
			this.props.saveTodo();
		}
	};

	validate({ title }) {
		const errors = {};
		if (title.trim().length < 0) {
			errors.title = 'The Title field is required';
		}

		return errors;
	}

	render() {
		return (
			<TodoForm
				onChangeFieldValue={this.props.changeValueTodoField}
				onSave={this.onSave}
				todo={this.props.todo}
			/>
		);
	}
}

const mapStateToProps = (state) => ({ todo: state.todos.tempTodo });

export default connect(mapStateToProps, { createTempTodo, changeValueTodoField, saveTodo })(TodoCreate);
