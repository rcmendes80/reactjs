import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderTags(tags) {
		return tags.map((tag, idx) => {
			return (
				<span key={idx} className="badge badge-secondary">
					{tag}
				</span>
			);
		});
	}

	renderList() {
		return this.props.posts.map((post, idx) => {
			return (
				<div key={idx} className="list-group-item">
					<div>{post.title}</div>
					<div>{post.description}</div>
					<div>{this.renderTags(post.tags)}</div>
				</div>
			);
		});
	}

	render() {
		if (!this.props.posts) {
			return <div>Loading...</div>;
		}
		return (
			<div className="card">
				<div className="card-body">
					<div className="card-title">
						<h4>Post List</h4>
					</div>
					<div className="list-group">{this.renderList()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: Object.values(state.posts)
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
