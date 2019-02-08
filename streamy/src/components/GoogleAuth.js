import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
	componentDidMount() {
		// 1. Load the JavaScript client library.
		window.gapi.load('client:auth2', this.loadOauth2Client);
	}

	loadOauth2Client = () => {
		// 2. Initialize the JavaScript client library.
		window.gapi.client
			.init({
				clientId: '719527631869-4aes1ns5qk6k45qjn0retm6v6qg5taa6.apps.googleusercontent.com',
				scope: 'email'
			})
			.then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null; //could be an loading image
		} else if (this.props.isSignedIn) {
			return (
				<div>
					<button className="ui red google button" onClick={this.onSignOutClick}>
						<i className="google icon" />
						Sign Out
					</button>
				</div>
			);
		}

		return (
			<div>
				<button className="ui red google button" onClick={this.onSignInClick}>
					<i className="google icon" />
					Sign In with Google
				</button>
			</div>
		);
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
