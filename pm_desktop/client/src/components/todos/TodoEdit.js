import React from 'react';
import { updateTodo, fetchTodo } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

class TodoEdit extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchTodo(id);
	}

	onSave = (formValues) => {
		const { id } = this.props.match.params;
		const todo = { ...formValues, id };
		this.props.updateTodo(todo);
	};

	render() {
		//TODO FIX THIS!
		return <TodoForm onSave={this.onSave} initialValues={this.props.todo} />;
	}
}

const mapStateToProps = (state, ownProps) => ({ todo: state.todos.data[ownProps.match.params.id] });

export default connect(mapStateToProps, { updateTodo, fetchTodo })(TodoEdit);
