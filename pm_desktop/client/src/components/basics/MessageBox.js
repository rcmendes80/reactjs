import React, { useState } from 'react';

const MessageBox = (props) => {
	console.log('#: MessageBox -> props', props);
	const { show = true, type = '', title, details = '' } = props;
	const [ className, setClassName ] = useState(show ? `ui ${type} message` : 'ui message hidden');

	const onClose = () => {
		setClassName('ui message transition');
		setTimeout(() => {
			setClassName('ui message hidden');
		}, 300);
	};

	return (
		<div className={className}>
			<i className="close icon" onClick={onClose} />
			<div className="header">{title}</div>
			<p>{details}</p>
		</div>
	);
};

export default MessageBox;
