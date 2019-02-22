import React from 'react';
import { createTodo } from '../../actions';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';

class TodoCreate extends React.Component {
	state = {
		todo: {
			title: '',
			description: '',
			done: false
		}
	};

	onChangeFieldValue = (field, value) => {
		this.setState({ todo: { ...this.state.todo, [field]: value } });
	};

	onSave = () => {
		this.props.createTodo(this.state.todo);
	};

	render() {
		return (
			<TodoForm
				onSubmit={this.onSave}
				initialValues={this.state.todo}
				onChangeFieldValue={this.onChangeFieldValue}
			/>
		);
	}
}

export default connect(null, { createTodo })(TodoCreate);
