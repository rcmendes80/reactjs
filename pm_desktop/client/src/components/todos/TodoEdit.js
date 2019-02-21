import React, { useEffect } from 'react';
import { saveTodo } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

const TodoEdit = (props) => {
	useEffect(() => {
		console.log(props.match.params);
	});

	const onSave = (formValues) => {
		props.saveTodo(formValues);
	};

	return <TodoForm onSave={onSave} initialValues={{ title: '', description: '' }} />;
};

export default connect(null, { saveTodo })(TodoEdit);
