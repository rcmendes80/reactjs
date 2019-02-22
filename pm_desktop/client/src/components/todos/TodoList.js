import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodos } from '../../actions';

import MessageBox from '../basics/MessageBox';

class TodoList extends React.Component {
	componentDidMount() {
		this.props.fetchTodos();
	}

	renderList() {
		if (this.props.loading) {
			return <MessageBox title="Loading..." />;
		}

		if (this.props.isError) {
			return <MessageBox title="Error on loading Todo list" details={this.props.errorMessage} />;
		}

		return this.props.todos.map((todo) => {
			const style = todo.done ? { textDecoration: 'line-through' } : {};
			return (
				<Link to={`/todos/edit/${todo.id}`} className="item" key={todo.id}>
					<div className="content">
						<div className="header">
							<span style={style}>{todo.title}</span>
						</div>
						<div className="description">{todo.description}</div>
					</div>
				</Link>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="ui relaxed divided list">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: Object.values(state.todos.data),
		isError: state.todos.isError,
		errorMessage: state.todos.errorMessage,
		isLoading: state.todos.loading
	};
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
