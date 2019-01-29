import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	render() {
		console.log(this.props);

		return <div>Song List</div>;
	}
}

const mapStateToProps = (state) => {
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
