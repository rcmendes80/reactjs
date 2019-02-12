import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active">
			<div className="ui standard modal visible active">
				<div className="header">We've auto-chosen a profile image for you.</div>
				<div className="content">
					We've grabbed the following image from the{' '}
					<a href="https://www.gravatar.com" target="_blank">
						gravatar
					</a>{' '}
					image associated with your registered e-mail address.
				</div>
				<div className="actions">
					<div className="ui black deny button">Nope</div>
					<div className="ui positive right labeled icon button">
						Yep, that's me
						<i className="checkmark icon" />
					</div>
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
