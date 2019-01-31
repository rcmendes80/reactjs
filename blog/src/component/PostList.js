import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		console.log(this.props.posts);
		return this.props.posts.map((post, index) => {
			return (
				<tr key={index}>
					<td>{post.title}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>{this.renderList()}</tbody>
			</table>
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
