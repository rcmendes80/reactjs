import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		const { posts } = this.props;

		return posts.map((post) => {
			return (
				<div className="item" key={post.id}>
					<i className="large user middle aligned icon" />
					<div className="content">
						<a className="header">{post.title}</a>
						<div className="description">{post.body}</div>
						<div className="header">
							<UserHeader userId={post.userId} />
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
		posts: state.posts
	};
};
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
