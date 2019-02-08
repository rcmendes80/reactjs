import React from 'react';

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };

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
				this.setState({ isSignedIn: this.auth.isSignedIn.get() });
				this.auth.isSignedIn.listen(this.onAuthChange);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignIn = () => {
		this.auth.signIn();
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null; //could be an loading image
		} else if (this.state.isSignedIn) {
			return (
				<div>
					<button className="ui red google button" onClick={this.onSignOut}>
						<i className="google icon" />
						Sign Out
					</button>
				</div>
			);
		}

		return (
			<div>
				<button className="ui red google button" onClick={this.onSignIn}>
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

export default GoogleAuth;
