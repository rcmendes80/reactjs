import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodos, showGlobalMessage } from '../../actions';

import LoadSpinner from '../basics/LoadSpinner';

class TodoList extends React.Component {
	componentDidMount() {
		this.props.fetchTodos();
	}

	renderActions(todo) {
		return (
			<div className="right floated content">
				<Link to={`/todos/edit/${todo.id}`}>
					<i className="bordered inverted edit outline icon teal" />
				</Link>
				<Link to={`/todos/delete/${todo.id}`}>
					<i className="bordered inverted trash alternate outline icon red" />
				</Link>
			</div>
		);
	}

	renderList() {
		return this.props.todos.map((todo) => {
			const styleDone = todo.done ? { textDecoration: 'line-through', color: 'grey', fontWeight: 'lighter' } : {};
			return (
				<div className="item" key={todo.id}>
					{this.renderActions(todo)}
					<div className="content">
						<div className="header" style={styleDone}>
							{todo.title}
						</div>
						<div className="description" style={styleDone}>
							{todo.description}
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		if (this.props.loading) {
			return <LoadSpinner />;
		}

		return (
			<div>
				<div className="ui attached message">
					<div className="header">Todo List</div>
					<p>List of all todos.</p>
				</div>
				<div className="ui relaxed divided list segment">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: Object.values(state.todos),
		loading: state.header.loading
	};
};

export default connect(mapStateToProps, { fetchTodos, showGlobalMessage })(TodoList);
