import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';
import Modal from '../Modal';

import history from '../history';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		return (
			<React.Fragment>
				<div className="ui negative button">Delete</div>
				<div className="ui button">Cancel</div>
			</React.Fragment>
		);
	}

	renderContent() {
		if (this.props.stream) {
			const { title } = this.props.stream;
			return `Do you wish to delete Stream with title ${title}?`;
		}

		return 'Do you wish to delete Stream?';
	}

	render() {
		console.log(this.props.stream);
		return (
			<div>
				Stream Delete
				<Modal
					onDismiss={() => history.push('/')}
					actions={this.renderActions()}
					title="Stream Delete"
					content={this.renderContent()}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
