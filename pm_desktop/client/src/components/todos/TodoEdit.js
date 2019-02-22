import React, { useEffect } from 'react';
import { updateTodo, fetchTodo } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

const TodoEdit = (props) => {
	const { id } = props.match.params;
	useEffect(
		() => {
			console.log('props.match.params.id', id);
			props.fetchTodo(id);
		},
		[ id ]
	);

	const onSave = (formValues) => {
		props.updateTodo(formValues);
	};

	//TODO FIX THIS!
	return <TodoForm onSave={onSave} initialValues={props.todo} />;
};

const mapStateToProps = (state, ownProps) => ({ todo: state.todos.data[ownProps.match.params.id] });

export default connect(mapStateToProps, { updateTodo, fetchTodo })(TodoEdit);
