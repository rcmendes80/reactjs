import React from 'react';

import InputTextForm from '../basics/InputTextForm';

const TodoForm = (props) => {
	return (
		<div>
			<div className="ui form">
				<InputTextForm
					name="title"
					placeholder="Enter a title"
					label="Title"
					required={true}
					value={props.todo.title}
					onChange={(e) => props.onChangeFieldValue('title', e.target.value)}
				/>
				<InputTextForm
					name="description"
					placeholder="Enter a Description"
					label="Description"
					required={false}
					value={props.todo.description}
					onChange={(e) => props.onChangeFieldValue('description', e.target.value)}
				/>
				<div className="field">
					<div className="ui checkbox">
						<label>Done</label>
						<input type="checkbox" tabIndex="0" className="hidden" name="done" />
					</div>
				</div>
				<button className="ui button" onClick={props.onSave}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default TodoForm;
