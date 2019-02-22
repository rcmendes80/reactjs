import React from 'react';
import { createTodo } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

class TodoCreate extends React.Component {
	onSave = (formValues) => {
		this.props.createTodo(formValues);
	};

	render() {
		return <TodoForm onSave={this.onSave} />;
	}
}

const mapStateToProps = (state) => ({ todo: state.todos.tempTodo });

export default connect(mapStateToProps, { createTodo })(TodoCreate);
