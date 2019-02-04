import React from 'react';
import { connect } from 'react-redux';

class SelectedSong extends React.Component {
	render() {
		const { song } = this.props;

		if (!song) {
			return null;
		}

		return (
			<div className="ui card">
				<div className="content">
					<div className="header">{song.title}</div>
				</div>
				<div className="content">{song.duration}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		song: state.selectedSong
	};
};

export default connect(mapStateToProps)(SelectedSong);
