import React, { useState } from 'react';

const MessageBox = (props) => {
	const { type = '', title, details = '', onClose } = props;
	const [ className, setClassName ] = useState(`ui ${type} message`);

	const onCloseClick = () => {
		setClassName('ui message transition');
		setTimeout(() => {
			setClassName('ui message hidden');
			onClose();
		}, 300);
	};

	const onShow = () => {
		setTimeout(() => {
			onCloseClick();
		}, 2000);
	};

	onShow();

	return (
		<div className={className}>
			<i className="close icon" onClick={onCloseClick} />
			<div className="header">{title}</div>
			<p>{details}</p>
		</div>
	);
};

export default MessageBox;
