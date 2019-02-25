import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals page transition visible active" style={{ display: 'flex !important' }}>
			<div className="ui standard modal visible active" style={{ display: 'block !important' }}>
				<i className="close icon" />
				<div className="header">Profile Picture</div>
				<div className="content">
					<p>Is it okay to use this photo?</p>
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

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	// content: PropTypes.element || PropTypes.text,
	actions: PropTypes.element.isRequired
};

export default Modal;
