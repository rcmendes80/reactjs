import React, { useState } from 'react';

const MessageBox = ({ visible = true, type = '', message, details = '' }) => {
	const [ className, setClassName ] = useState(visible ? `ui ${type} message` : 'ui message transition');

	const onClose = () => {
		setClassName('ui message transition');
		setTimeout(() => {
			setClassName('ui message hidden');
		}, 300);
	};

	return (
		<div className={className}>
			<i className="close icon" onClick={onClose} />
			<div className="header">{message}</div>
			<p>{details}</p>
		</div>
	);
};

export default MessageBox;
