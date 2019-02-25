import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTodo, deleteTodo } from '../../actions';

import history from '../history';

import Modal from '../basics/Modal';

class TodoDelete extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchTodo(id);
	}

	renderActions = () => {
		const { id } = this.props.match.params;
		return (
			<React.Fragment>
				<div className="ui negative button" onClick={() => this.props.deleteTodo(id)}>
					Delete
				</div>
				<Link to="/todos" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	};

	renderContent = () => {
		const { todo } = this.props;
		if (todo) {
			const { title } = todo;
			return `Do you wish to delete Todo with title: ${title}?`;
		}

		return 'Do you wish to delete Todo?';
	};

	render() {
		return (
			<div>
				<Modal
					onDismiss={() => history.push('/')}
					actions={this.renderActions()}
					title="Delete a Todo"
					content={this.renderContent()}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({ todo: state.todos[ownProps.match.params.id] });

export default connect(mapStateToProps, { deleteTodo, fetchTodo })(TodoDelete);
