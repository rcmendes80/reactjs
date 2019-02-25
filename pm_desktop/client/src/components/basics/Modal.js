import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active">
			<div className="ui standard modal visible active">
				<i className="close icon" />
				<div className="header">{props.title}</div>
				<div className="content">
					<p>{props.content}</p>
				</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	// content: PropTypes.element || PropTypes.text,
	actions: PropTypes.element.isRequired
};

export default Modal;
