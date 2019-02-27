import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import InputTextForm from '../basics/InputTextForm';
import InputCheckboxForm from '../basics/InputCheckboxForm';
import InputTextAreaForm from '../basics/InputTextAreaForm';

const TodoForm = (props) => {
	const { initialValues } = props;

	const [ due, setDue ] = useState(initialValues.due ? true : false);

	const title = initialValues ? initialValues.title : '';
	const description = initialValues ? initialValues.description : '';
	const done = initialValues ? initialValues.done : false;
	const dueDate =
		initialValues && initialValues.due && initialValues.due.date
			? initialValues.due.date
			: moment().format('YYYY-MM-DD');
	const dueTime = initialValues && initialValues.due && initialValues.due.time ? initialValues.due.time : '12:00';

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
				<div className="header">{props.title}</div>
				<p>{props.details}</p>
			</div>
			<div className="ui form attached fluid segment">
				<div className="fields">
					<div className="twelve wide field">
						<InputTextForm
							name="title"
							placeholder="Enter a title"
							label="Title"
							required={true}
							value={title}
							onChange={props.onChangeFieldValue}
							validate={validateTitleField}
						/>
					</div>
					<div className="inline field">
						<div className="ui toggle checkbox">
							<input type="checkbox" className="hidden" tabIndex="0" name="due" checked={due} readOnly />
							<label onClick={setDue(!due)}>Due</label>
						</div>
					</div>
					<div className="ui segment">
						<div className="field">
							<label>Due</label>
							<div className="fields">
								<div className="twelve wide field">
									<input
										type="date"
										value={dueDate}
										name="due.date"
										onChange={(e) => props.onChangeFieldValue('due.date', e.target.value)}
									/>
								</div>
								<div className="six wide field">
									<input
										type="time"
										value={dueTime}
										name="due.time"
										onChange={(e) => props.onChangeFieldValue('due.time', e.target.value)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<InputTextAreaForm
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

TodoForm.propTypes = {
	title: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	initialValues: PropTypes.object,
	onChangeFieldValue: PropTypes.func.isRequired
};

export default TodoForm;
