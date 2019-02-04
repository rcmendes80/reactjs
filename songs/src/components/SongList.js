import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

import SelectedSong from './SelectedSong';
class SongList extends Component {
	renderList() {
		return this.props.songs.map((song, idx) => {
			return (
				<a key={idx} className="item" onClick={() => this.props.selectSong(song)}>
					<i className="music icon" />

					<div className="content">
						<div className="header">{song.title}</div>
						<div className="description">{song.duration}</div>
					</div>
				</a>
			);
		});
	}

	render() {
		return (
			<div className="ui raised very padded text container segment">
				<h2 className="ui header">List of Songs</h2>
				<div className="ui two column relaxed grid">
					<div className="column">
						<div class="ui list">{this.renderList()}</div>
					</div>
					<div className="column">
						<SelectedSong />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
