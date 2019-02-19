import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodos } from '../../actions';

class TodoList extends React.Component {
	componentDidMount() {
		this.props.fetchTodos();
	}

	renderList() {
		console.log(this.props);
		if (this.props.loading) {
			return <div>Loading....</div>;
		}

		if (this.props.isError) {
			return <div>{this.props.errorMessage}</div>;
		}

		return this.props.todos.map((todo) => {
			return (
				<Link to={`/todos/${todo.id}`} className="item" key={todo.id}>
					<div className="content">
						<div className="header">{todo.title}</div>
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
