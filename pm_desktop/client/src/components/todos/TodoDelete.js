import React from 'react';

import Modal from '../basics/Modal';

const actionButtons = () => {
	return <div />;
};

const TodoDelete = (props) => {
	return (
		<div>
			<Modal title="Title" content="Content" actions={actionButtons()} />
		</div>
	);
};

export default TodoDelete;
