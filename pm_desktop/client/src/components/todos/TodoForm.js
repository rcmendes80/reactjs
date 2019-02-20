import React, { useState } from 'react';

import InputForm from '../basics/InputForm';

const TodoForm = (props) => {
	let initialFieldValuesState = { title: '', description: '', done: false };
	if (props.initialValues) {
		initialFieldValuesState = { ...initialFieldValuesState, ...props.initialValues };
	}

	const [ fieldValues, setFieldValues ] = useState(initialFieldValuesState);

	const onChangeFieldValue = (field, value) => {
		setFieldValues({ ...fieldValues, [field]: value });
	};

	const validateTitleField = () => {
		let errors = [];
		const { title } = fieldValues;
		if (title.trim().length < 1) {
			errors = [ ...errors, 'The title is required.' ];
		}

		return errors;
	};

	const onSave = () => {
		console.log('#: TodoForm -> onSave -> fieldValues', fieldValues);
		const errors = validateTitleField();
		if (errors.length > 0) {
			//TODO Exibir mensagem para resolver pendencias do formulário
		} else {
			props.onSave(fieldValues);
		}
	};

	return (
		<div>
			<div className="ui fluid form">
				<InputForm
					name="title"
					placeholder="Enter a title"
					label="Title"
					required={true}
					value={fieldValues.title}
					onChange={onChangeFieldValue}
					validate={validateTitleField}
				/>
				<InputForm
					name="description"
					placeholder="Enter a Description"
					label="Description"
					required={false}
					value={fieldValues.description}
					onChange={onChangeFieldValue}
				/>
				<InputForm
					name="done"
					label="Done"
					type="checkbox"
					value={fieldValues.done}
					onChange={onChangeFieldValue}
				/>
				<div className="field">
					<div className="ui checkbox">
						<label>Done</label>
						<input type="checkbox" tabIndex="0" name="done2" />
					</div>
				</div>

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
