import React from 'react';

const MessageBox = (props) => {
	return (
		<div className="ui success message">
			<i className="close icon" onClick={console.log} />
			<div className="header">Your user registration was successful.</div>
			<p>You may now log-in with the username you have chosen</p>
		</div>
	);
};

export default MessageBox;
