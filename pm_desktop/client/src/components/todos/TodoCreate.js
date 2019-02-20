import React from 'react';
import { createTempTodo, saveTodo } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

class TodoCreate extends React.Component {
	componentDidMount() {
		this.props.createTempTodo();
	}

	onSave = (formValues) => {
		this.props.saveTodo(formValues);
	};

	render() {
		return <TodoForm onSave={this.onSave} initialValues={{ title: '', description: '' }} />;
	}
}

const mapStateToProps = (state) => ({ todo: state.todos.tempTodo });

export default connect(mapStateToProps, { saveTodo })(TodoCreate);
