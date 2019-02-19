import React from 'react';
import { createTempTodo, changeValueTodoField, saveTodo } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

class TodoCreate extends React.Component {
	componentDidMount() {
		this.props.createTempTodo();
	}

	render() {
		return (
			<TodoForm
				onChangeFieldValue={this.props.changeValueTodoField}
				onSave={this.props.saveTodo}
				todo={this.props.todo}
			/>
		);
	}
}

const mapStateToProps = (state) => ({ todo: state.todos.tempTodo });

export default connect(mapStateToProps, { createTempTodo, changeValueTodoField, saveTodo })(TodoCreate);
