import React, { useState, useEffect } from 'react';

import InputTextForm from '../basics/InputTextForm';
import InputCheckboxForm from '../basics/InputCheckboxForm';

const TodoForm = (props) => {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ done, setDone ] = useState(false);

	const validateTitleField = () => {
		let errors = [];
		if (title.trim().length < 1) {
			errors = [ ...errors, 'The title is required.' ];
		}

		return errors;
	};

	useEffect(
		() => {
			if (props.initialValues) {
				setTitle(props.initialValues.title || title);
				setDescription(props.initialValues.description || description);
				setDone(props.initialValues.done || done);
			}
		},
		[ props.initialValues ]
	);

	const onSave = () => {
		const errors = validateTitleField();
		if (errors.length > 0) {
			//TODO Exibir mensagem para resolver pendencias do formulário
		} else {
			props.onSave({ title, description, done });
		}
	};

	return (
		<div>
			<div className="ui attached message">
				<div className="header">Create a new Todo</div>
				<p>Fill out the form below to create a new todo.</p>
			</div>
			<div className="ui form attached fluid segment">
				<InputTextForm
					name="title"
					placeholder="Enter a title"
					label="Title"
					required={true}
					value={title}
					setValueHandler={setTitle}
					validate={validateTitleField}
				/>
				<InputTextForm
					name="description"
					placeholder="Enter a Description"
					label="Description"
					value={description}
					setValueHandler={setDescription}
				/>
				<InputCheckboxForm name="done" label="Done" value={done} setValueHandler={setDone} />
				<div>
					<button className="ui button" onClick={onSave}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoForm;
