import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	renderList() {
		return this.props.songs.map((song, idx) => {
			return (
				<div key={idx}>
					<span>{song.title}</span>
					<span>
						<button onClick={() => this.props.selectSong(song)}>select</button>
					</span>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h3>Song List</h3>
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
