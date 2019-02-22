import React from 'react';

import InputTextForm from '../basics/InputTextForm';
import InputCheckboxForm from '../basics/InputCheckboxForm';

const TodoForm = (props) => {
	const { initialValues } = props;
	const title = initialValues ? initialValues.title : '';
	const description = initialValues ? initialValues.description : '';
	const done = initialValues ? initialValues.done : false;

	const validateTitleField = () => {
		let errors = [];
		if (title.trim().length < 1) {
			errors = [ ...errors, 'The title is required.' ];
		}

		return errors;
	};

	const onSave = () => {
		const errors = validateTitleField();
		if (errors.length > 0) {
			//TODO Exibir mensagem para resolver pendencias do formulário
		} else {
			props.onSubmit();
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
					onChange={props.onChangeFieldValue}
					validate={validateTitleField}
				/>
				<InputTextForm
					name="description"
					placeholder="Enter a Description"
					label="Description"
					value={description}
					onChange={props.onChangeFieldValue}
				/>
				<InputCheckboxForm name="done" label="Done" value={done} onChange={props.onChangeFieldValue} />
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
