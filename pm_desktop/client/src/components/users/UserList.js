import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import { fetchUsers } from '../../actions';

class UserList extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderList() {
		return this.props.users.map((user) => {
			return (
				<div className="item" key={user.id}>
					<i className="large user middle aligned icon" />
					<div className="content">
						<Link to={`/users/edit/${user.id}`} className="header">{user.name}</Link>
						<div className="description">
							<div>{user.username}</div>
							<div>{user.email}</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		users: Object.values(state.users)
	};
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
