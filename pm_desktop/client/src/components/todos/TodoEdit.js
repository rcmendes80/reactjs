import React from 'react';
import { updateTodo, fetchTodo, updateTodoPropertyValue } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

class TodoEdit extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchTodo(id);
	}

	onSave = () => {
		this.props.updateTodo(this.props.todo);
	};

	onChangeFieldValue = (field, value) => {
		const { id } = this.props.match.params;
		this.props.updateTodoPropertyValue({ id, property: field, value });
	};

	render() {
		//TODO FIX THIS!
		return (
			<TodoForm
				onSubmit={this.onSave}
				initialValues={this.props.todo}
				onChangeFieldValue={this.onChangeFieldValue}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({ todo: state.todos.data[ownProps.match.params.id] });

export default connect(mapStateToProps, { updateTodo, fetchTodo, updateTodoPropertyValue })(TodoEdit);
